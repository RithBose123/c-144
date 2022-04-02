import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Popular from './Screens/popular';
import Recommended from './Screens/recommended';
import {createAppContainer} from "react-navigation"
import {createStackNaviagtor} from "react-navigation-stack"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
export default function App() {
  return (
  <AppContainer/>
  );
}
const TopNavigation=createMaterialTopTabNavigator({
  Recommended:{
    screen:Recommended,
    navigationOptions:{
      tabBarLabel:"Recommended",
      tabBarOptions:{
        tabStyle:{backgroundColor:"white"},
        labelStyle:{color:"black"},
        indicatorStyle:{backgroundColor:"black"}
      }
    },
  },
  Popular:{
    screen:Popular,
    navigationOptions:{
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{backgroundColor:"white"},
        labelStyle:{color:"black"},
        indicatorStyle:{backgroundColor:"black"}
      }
    },
  },
});
const StackNavigator=createStackNaviagtor(
  {
    Home:{
      screen: Home,
      navigationOptions:{
        headerShown:false
      }
    },
    Apptopnav:{
      screen:TopNavigation,
      navigationOptions:{
        headerBackTitle:null,
        headerTintColor:"white",
        headerTitle:"Recommended movies",
        headerStyle:{
          backgroundColor:"#d500f9"
        },
        headerTitleStyle:{color:"white",fontWeight:"bold",fontSize:RFValue(18)}
      }
    }
  },
  {
    initialRouteName:"Home"
  }
)
const AppContainer=createAppContainer(StackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


