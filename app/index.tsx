import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { ThemeText } from '@/components/ThemeText'
import CalculatorBtn from '@/components/CalculatorBtn'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <ThemeText variant='primary'> 50x50 </ThemeText>
        <ThemeText variant='secondary'> 2500 </ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='C' onpress={() => { }}
          blackText
          color={Colors.lightGray} />
        <CalculatorBtn label='+/-'
          onpress={() => { }}
          blackText color={Colors.lightGray} />
        <CalculatorBtn label='del'
          onpress={() => { }}
          blackText color={Colors.lightGray} />
        <CalculatorBtn label='/'
          onpress={() => { }}
          color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='7' onpress={() => { }} />
        <CalculatorBtn label='8' onpress={() => { }} />
        <CalculatorBtn label='9' onpress={() => { }} />
        <CalculatorBtn label='x' onpress={() => { }} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='4' onpress={() => { }} />
        <CalculatorBtn label='5' onpress={() => { }} />
        <CalculatorBtn label='6' onpress={() => { }} />
        <CalculatorBtn label='-' onpress={() => { }} color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBtn label='1' onpress={() => { }} />
        <CalculatorBtn label='2' onpress={() => { }} />
        <CalculatorBtn label='3' onpress={() => { }} />
        <CalculatorBtn label='+' onpress={() => { }} color={Colors.orange} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='0'
        doubleSize
        onpress={() => { }} />
        <CalculatorBtn label='.' onpress={() => { }} />
        <CalculatorBtn label='=' onpress={() => { }} color={Colors.orange} />
      </View >
    </View>
  )
}

export default CalculatorApp