import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, SplashScreen } from '../screens'
// import { BottomNavigator } from '../components'
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

const Stack = createStackNavigator()
// const Stack = createSharedElementStackNavigator()
const Tab = createBottomTabNavigator()

const options = {
  gestureEnabled: true,
  ...TransitionPresets.ScaleFromCenterAndroid
}

const optionsiOS = {
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS
}

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tab.Screen name='Home' component={Home} />
//       <Tab.Screen name='Profile' component={Profile} />
//     </Tab.Navigator>
//   )
// }

const Router = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   gestureEnabled: false,
      //   transitionSpec: {
      //     open: { animation: 'timing', config: { duration: 400 } },
      //     close: { animation: 'timing', config: { duration: 400 } }
      //   },
      //   cardStyleInterpolator: ({ current: { progress } }) => {
      //     return {
      //       cardStyle: {
      //         opacity: progress
      //       }
      //     }
      //   }
      // }}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Router