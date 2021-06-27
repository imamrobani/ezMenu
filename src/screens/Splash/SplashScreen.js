import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo } from '../../assets'
import * as Animatable from 'react-native-animatable'
import { Fonts } from '../../consts'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // getData('token').then(res => {
      //   if (res) {
      //     navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
      //   } else {
      //     navigation.replace('SignIn')
      //   }
      // })
      navigation.navigate('Login')
    }, 2500);
  }, [navigation])

  return (
    <View style={styles.container} >
      <Animatable.View
        style={styles.container}
        useNativeDriver
        animation={'bounceIn'}
        delay={500}
        duration={1500}
      >
        <Logo />
        <View style={{ height: 8 }} />
        <Text style={styles.title}>ezMenu</Text>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    color: '#020202',
    fontFamily: Fonts.POPPINS_MEDIUM
  }
})

export default SplashScreen