import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { ThemeText } from '@/components/ThemeText'
import CalculatorBtn from '@/components/CalculatorBtn'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/Hooks/useCalculator'

const CalculatorApp = () => {

  const { number, formula, prevNumber, buildNumber, clearCalc, toggleSimbol, deleteLastNumber, divideOperations,
    multiplyOperations,
    addOperations,
    substractperations } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <ThemeText variant='primary'>{formula}</ThemeText>
        {formula === prevNumber ?
          <ThemeText variant='secondary'> </ThemeText> :
          <ThemeText variant='secondary'>{prevNumber}</ThemeText>
        }

      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='C' onpress={clearCalc}
          blackText
          color={Colors.lightGray} />
        <CalculatorBtn label='+/-'
          onpress={toggleSimbol}
          blackText color={Colors.lightGray} />
        <CalculatorBtn label='del'
          onpress={deleteLastNumber}
          blackText color={Colors.lightGray} />
        <CalculatorBtn label='/'
          onpress={divideOperations}
          color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='7' onpress={() => { buildNumber('7') }} />
        <CalculatorBtn label='8' onpress={() => { buildNumber('8') }} />
        <CalculatorBtn label='9' onpress={() => { buildNumber('9') }} />
        <CalculatorBtn label='x' onpress={multiplyOperations} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='4' onpress={() => { buildNumber('4') }} />
        <CalculatorBtn label='5' onpress={() => { buildNumber('5') }} />
        <CalculatorBtn label='6' onpress={() => { buildNumber('6') }} />
        <CalculatorBtn label='-' onpress={substractperations} color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBtn label='1' onpress={() => { buildNumber('1') }} />
        <CalculatorBtn label='2' onpress={() => { buildNumber('2') }} />
        <CalculatorBtn label='3' onpress={() => { buildNumber('3') }} />
        <CalculatorBtn label='+' onpress={addOperations} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='0'
          doubleSize
          onpress={() => { buildNumber('0') }} />
        <CalculatorBtn label='.' onpress={() => { buildNumber('.') }} />
        <CalculatorBtn label='=' onpress={() => { }} color={Colors.orange} />
      </View >
    </View>
  )
}

export default CalculatorApp