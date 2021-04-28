import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Linking} from 'react-native';



    const conseils = () =>(
      
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          <Text style={styles.logoText}>conseils</Text>
        </View>
        <Text style={styles.para}>conseils pour maman</Text>
        
        
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
        logo: {
            width: 90,
            height: 90,
            
          },
          logocontainer: {
            alignItems: 'center',
            marginBottom: 70,
          },
          logoText: {
            color: '#045610',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10,
            opacity: 0.8
          },
          para:{
              alignItems:'center',
              fontSize:25,
          }
        });


        export default conseils;