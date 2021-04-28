import React,{useEffect, useState} from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Dimensions,Image, Button,ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,

} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBKV2y0J7L2bxpGQkOD_ZeMg_a0U2QqDv0",
  authDomain: "nabnab-67f3a.firebaseapp.com",
  projectId: "nabnab-67f3a",
  storageBucket: "nabnab-67f3a.appspot.com",
  messagingSenderId: "470512071095",
  appId: "1:470512071095:web:dd689e6382e1bac21db832",
  measurementId: "G-CKNBWYJ4BN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const test = (props) =>{
  const [number, setNumber] = useState(null);
  const [labels, setLabels] = useState(null);
  const writeUserData = async() =>{
        firebase.database().ref('user').push(
            {
                number,
                labels
            }
        ).then((data) => {
            console.log('data',data);
        }).catch((error) => {
            console.log('error',error);
        });
    
    }
    
  

  return(
        
    <View style={{flex:1 ,justifyContent :'center',alignItems:'center'}}>
              <TextInput
                   placeholder='enter hsghd'
                   value={number}
                   onChangeText={(txt)=>setNumber({number})}
                   keyboardType='number-pad'
              />
              <TextInput
                   placeholder='enter dsqd'
                   value={labels}
                   onChangeText={(txt) => setLabels({...labels, gender: txt})}
                   
              />
              
   <View style={{marginTop:40 , width:100}}>
             <Button
                 title='save'
                 onPress = {()=> writeUserData(setNumber,setLabels)}
             />
   </View> 
    </View>
           
               
  )}
  

        export default test;