import { useEffect, useRef, useState } from "react"

const enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/'
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    // Lo que se va a ver en la pantalla
    const [formula, setFormula] = useState('')

    const lastOperator = useRef<Operator>()

    useEffect(() => {
        setFormula(number)
    }, [number])

    const clearCalc = () => {
        setNumber('0')
    }
    const buildNumber = (numText: string) => {
        // verificar si ya hay un punto
        if (numText === '.' && number.includes('.')) return
        if (numText === '0' && number === '0') return
        if (number === '0' && numText !== '.') {
            setNumber(numText)
            return
        }
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numText === '.') {
                return setNumber(number + numText)
            }
            if (numText === '0' && number.includes('.')) {
                return setNumber(number + numText)
            }
            // valuar si es diferent de cero, no hay punto y es el primer numero
            if (numText != '0' && !number.includes('.')) {
                return setNumber(numText)
            }

        }
        setNumber(number + numText)
    }

    return {
        // Properties
        number,
        prevNumber,
        formula,
        // Methods
        buildNumber,
        clearCalc
        
    }
}