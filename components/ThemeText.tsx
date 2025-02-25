import { View, Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface ThemeTextProps extends TextProps {
    variant?: 'primary' | 'secondary'

}

const ThemeText = ({ children, variant = 'primary', ...rest }: ThemeTextProps) => {
    return (
        <Text
            style={[{ color: 'white', fontFamily: 'spaceMono' },
            variant === 'secondary' && globalStyles.subResult,
            variant === 'primary' && globalStyles.mainResult]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}>

            {children}

        </Text>
    )
}

export { ThemeText }