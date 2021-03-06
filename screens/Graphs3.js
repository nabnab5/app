import React from 'react';
import { StyleSheet, Text,Image, View,Dimensions,ImageBackground,ScrollView,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,

} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';

    const Graphs3 = ({navigation}) =>(
        
      <ImageBackground source={require('../assets/images/Graphs.jpg')} style={styles.Backgroundcontainer}>
        <View style={{alignItems: 'center',marginBottom: 70}}>
          <Image source={require('../assets/images/baby-weight.png')}  style={{width: 70,height: 70,}}/>
          <Text style={{color:'#045610',fontSize: 25,fontWeight: 'bold',marginTop: 10,opacity: 0.8}} >weight</Text>
        </View>
        <ScrollView horizontal={true}  >
        
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/hot.png')}
                        style={{height:40,width:40}}
                       />
                       <Button  color='transparent' fontWeight='bold' title="temperature" onPress={() => navigation.replace('Graphs1')}/>
                   </View>

                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/heartbeat.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='transparent' fontWeight='bold' title="Heartbeat" onPress={() => navigation.replace('Graphs2')}/>
                   </View>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#f9dd7a",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/baby-weight.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='transparent' fontWeight='bold' title="     weight   " onPress={() => navigation.replace('Graphs3')}/>
                   </View>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/height.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='transparent' fontWeight='bold' title="         Size         " onPress={() => navigation.replace('Graphs4')}/>
                   </View>
                   </ScrollView>
                   <View style={{flexDirection:'row' ,paddingHorizontal:30,marginTop:40,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>DAY        </Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>WEEK       </Text>
                        <View style={{backgroundColor:"#FFF",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                            <Icon name="md-refresh" size={24} color="red"/>
                        </View>
                        </View>
       
              
                
             
                <View style={{
      marginHorizontal: 20,
      marginTop: 40
    }}>
      <LineChart
  data={{
    labels: ["15d", "1month", "2month", "3month", "4month", "5month"],
    datasets:[
      {
        data: [3.7, 4.6 , 6, 6.5, 7.7, 7.4],
      color: (opacity = 1) => `zz`,
      strokeWidth: 2 
      }
    ]
  }}
  
  width={Dimensions.get("window").width}
  height={220}
 
    yAxisSuffix="Kg"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#FFF",
      backgroundGradientTo: "rgba(215, 42, 83, 0)",
      decimalPlaces: 2 , 
      color: (opacity = 0) => `rgba(55, 47, 49, ${opacity})`,
      labelColor: (opacity = 1) =>  `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "white"
      }
    }}
      bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    />
             </View>
                </ImageBackground>
    );

    const styles = StyleSheet.create({
      Backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
          skiptextcont:{
            top:80,
            flexDirection:'row',
          },
          
          inputIcon: {
            position:'absolute',
            bottom: 70,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          },
          logo: {
            width: 200,
            height: 120,
          }
        });


        export default Graphs3;