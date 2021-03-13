import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Image,  View } from 'react-native';
import * as RootNavigation from './rootNavigation';
import a from '../App'
import Styles from '../style'
import App from '../App';

export default function FooterLogos({ screenName }){
  //const CreateProfile = ({onFirstNameChange, onHide, show }) => {...}
  //console.log(v)
  return (
      <View style={Styles.footer} >
          <TouchableOpacity style={Styles.footerImage} onPress={()=>{
            
              RootNavigation.navigate('characters')
          }}>
            <Image  style={Styles.footerImage} source={require('../assets/Person.png')}></Image>
          </TouchableOpacity>
         
         <TouchableOpacity style={Styles.footerImage} onPress={()=>{
              RootNavigation.navigate('episodes')
          }}>
            <Image  style={Styles.footerImage} source={require('../assets/Video.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.footerImage} onPress={()=>{
              RootNavigation.navigate("quotes")
          }}>
            <Image  style={Styles.footerImage} source={require('../assets/Quora.png')}></Image>
          </TouchableOpacity>
          
      </View>  
  );
};