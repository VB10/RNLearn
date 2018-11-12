import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator,createTabNavigator,createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation';
import Home1 from './src/view/navigation/home1';
import Home1Detail from './src/view/navigation/homeDetail1';



const App = createStackNavigator({
    Home: Home1,
    HomeDetail: Home1Detail
},
    {
        navigationOptions: {
        header:null
    }
}
)
const App2 = createTabNavigator({
    Home: Home1,
    HomeDetail: Home1Detail
})

const App3 = createMaterialTopTabNavigator({
    Home: Home1,
    HomeDetail: Home1Detail
})
const App4 = createBottomTabNavigator({
    Home: Home1,
    HomeDetail: Home1Detail
})


export default App4