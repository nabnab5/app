
import React from 'react';
import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Profile from './screens/Profile';
import BabyProfile from './screens/BabyProfile';
import AboutUs from './screens/AboutUs';
import Welcome from './screens/Welcome';

import Graphs1 from './screens/Graphs1';
import Graphs2 from './screens/Graphs2';
import Graphs3 from './screens/Graphs3';
import conseils from './screens/conseils';
import Graphs4 from './screens/Graphs4';
import { DrawerContent } from './screens/DrawerContent';
import Maps from './screens/Maps';
import Update from './screens/Update';
import test from './screens/test';
import test2 from './screens/test2';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = (props) =>(
  
 <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>    
      <Drawer.Screen name = 'BabyProfile' component={BabyProfile} />
      <Drawer.Screen name = 'Graphs1' component={Graphs1} />
      <Drawer.Screen name = 'Graphs2' component={Graphs2} />
      <Drawer.Screen name = 'Graphs3' component={Graphs3} />
      <Drawer.Screen name = 'Graphs4' component={Graphs4} />
      <Drawer.Screen name="conseils" component={conseils} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Maps" component={Maps} />
      
      
    </Drawer.Navigator>
  
);


const ProfileNavigator = (props) => (
  
    <Stack.Navigator initialRouteName='test2'>
      <Stack.Screen name = 'Welcome' component={Welcome} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'SignUp' component={SignUp} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Login' component={Login} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Profile' component={Profile}  options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'BabyProfile' component={DrawerNavigator} options={{ 
        title:'BabyTracker',
        headerLeft:() => (
            <Icon
              name="gesture-swipe-right"
              Colors="black"
              size={40}
            />),
      }}/>
      <Stack.Screen name = 'Graphs1' component={Graphs1} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Graphs2' component={Graphs2} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Graphs3' component={Graphs3} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Graphs4' component={Graphs4} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'conseils' component={conseils} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'AboutUs' component={AboutUs} options={{ title:'BabyTracker' }}/>
      <Stack.Screen name = 'Maps' component={Maps} />
      <Stack.Screen name = 'Update' component={Update} options={{ title:'BabyTracker'}}/>
      <Stack.Screen name = 'test' component={test} options={{ title:'BabyTracker'}}/>
      <Stack.Screen name = 'test2' component={test2} options={{ title:'schedule of vaccination'}}/>
    </Stack.Navigator>
    
    
    
  
);
export default function App() {
  return(
    <NavigationContainer>
      <ProfileNavigator/>  
    </NavigationContainer>
    
  )
}

const style =StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});