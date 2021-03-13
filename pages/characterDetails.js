import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,ScrollView, Image, Text, View } from 'react-native';
import Styles from '../style'
import * as RootNavigation from '../compoents/rootNavigation';
export default function CharactersDetails({navigation,route}){

    const{character}=route.params;
    navigation.setOptions({title:character.name})
  return (
     <View style={{height:'100%'}}>
         <Image style={{width:'100%',height:'72%'}} source={{uri:character.img}}></Image>
         <Text style={{padding:20 ,fontSize:17,color:'green',fontWeight: 'bold',left:1}}>{character.name}</Text>
              <View style={{position:'relative',left:200,top:-45,width:180,height:35,backgroundColor:((`#f5f5dc`)),alignItems: 'center'}} >
                  <Text style={{textAlign: 'center', // <-- the magic
                      color:'green',
                      fontSize: 17,
                      padding:5,fontWeight: 'bold',
                      width: 100}}>{character.nickname}</Text>
              </View>
         <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>birthday</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>{character.birthday}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>portrayed</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>{character.portrayed}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>category</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>{character.category}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>appearance</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>
                    {
                        character.appearance.map((item,index)=>{
                            if(index!=0)
                                return(<Text>, {item}</Text>)
                            else{
                                return(<Text>{item}</Text>)
                            }
                        })
                        
                    }</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>status</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>{character.status}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',position:'relative',top:-45}}> 
                <Text style={{fontSize:11,color:'black',left:20}}>occupation</Text>
                <Text  style={{fontSize:11,color:"grey",position:'absolute',left:120}}>
                    {
                    
                        character.occupation.map((item,index)=>{
                            if(index==0){
                                return(  
                                  <Text >{item}</Text>      
                                 
                                );
                              }
                              else{
                                  if(index%2==0){
                                      return(        
                                          <Text >,{'\n'}{item} </Text>
                                        );
                                  }
                                  else{
                                      return(        
                                          <Text>,{item}</Text>
                                        );
                                  }
                                
                              }
                             
                        
                        })
                    }</Text>
            </View>
         </View>
          
     </View>
        
  );
};