import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Linking} from 'react-native';



    const AboutUs = () =>(
      
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          <Text style={styles.logoText}>AboutUs</Text>
        </View>
        <Text style={styles.para}>nous sommes trois etudiants de DUT informatique en Ecole Superieur de Technologie</Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://www.google.com/maps/search/pharmacy/@33.2264659,-8.4952236,15z/data=!3m1!4b1')}>
          naboulsi Facebook
          </Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://www.google.com/maps/search/hospital/@33.2295994,-8.5096725,13.75z')}>
          hospital
          </Text>
          
          
        
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


        export default AboutUs;