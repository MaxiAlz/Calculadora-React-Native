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
    const toggleSimbol = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }

    const deleteLastNumber = () => {
        if (number.length === 1) {
            setNumber('0')
        } else {
            setNumber(number.slice(0, -1))
        }
    }

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        }
        setPrevNumber(number)
        setNumber('0')
    }

    const divideOperations = () => {
        setLastNumber()
        lastOperator.current = Operator.DIVIDE
    }
    const multiplyOperations = () => {
        setLastNumber()
        lastOperator.current = Operator.MULTIPLY
    }

    const addOperations = () => {
        setLastNumber()
        lastOperator.current = Operator.ADD
    }

    const substractperations = () => {
        setLastNumber()
        lastOperator.current = Operator.SUBTRACT
    }
    return {
        // Properties
        number,
        prevNumber,
        formula,
        // Methods
        buildNumber,
        clearCalc,
        toggleSimbol,
        deleteLastNumber,
        divideOperations,
        multiplyOperations,
        addOperations,
        substractperations
    }
}