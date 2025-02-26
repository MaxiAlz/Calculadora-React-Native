import { Pressable, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import * as Haptics from 'expo-haptics';


interface CalculatorBtnProps {
    label: string
    color?: string
    blackText?: boolean
    doubleSize?: boolean
    onpress: () => void

}

const CalculatorBtn = ({ label,
    color = Colors.darkGray,
    blackText = false,
    onpress,
    doubleSize = false
}: CalculatorBtnProps) => {


    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSize ? 150 : 70
        })}
            onPress={() => {
                Haptics.notificationAsync;
                onpress();
            }}
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white'
            }}>{label}</Text>
        </Pressable>

    )
}

export default CalculatorBtn