import React from 'react';
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/components/context/AuthContext'
import {Provider as LocationProvider} from './src/components/context/LocationContext'
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

const switchNavigator=createSwitchNavigator({
  Resolve:ResolveAuthScreen,
  loginFlow:createStackNavigator({
    Signup:SignupScreen,
    Signin:SigninScreen,
    
  }),
  mainFlow:createBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen,

  })
})


const App= createAppContainer(switchNavigator)

export default ()=>{
  return(
  <LocationProvider>
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}} />
    </AuthProvider>
  </LocationProvider>
    
  )
}