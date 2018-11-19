import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createTabNavigator, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import {Router,Scene} from 'react-native-router-flux'
import Home1 from './src/view/navigation/home1';
import Home1Detail from './src/view/navigation/homeDetail1';
import TabsCustom from './src/view/navigation/tabs';




const FluxApp = () => (
    <Router>
        <Scene key="root">
            <Scene key="tab" initial tabs hideNavBar tabBarComponent={TabsCustom} >
            <Scene key="home" component={Home1} title="asd" />
            <Scene key="homeDetail" component={Home1Detail} title="detail" />
            </Scene>

        </Scene>
    </Router>
)

// #MARK React Navigation
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


export default FluxApp