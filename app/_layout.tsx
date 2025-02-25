import { View, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'

import { globalStyles } from '@/styles/global-styles'

const RootLayout = () => {

  const [loader] = useFonts({
    spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loader) {
    return null
  }

  return (
    <View style={globalStyles.background}>

      <Slot />
      <StatusBar barStyle={'dark-content'} />
    </View>
  )
}

export default RootLayout