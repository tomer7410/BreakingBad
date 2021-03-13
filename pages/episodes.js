import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,ScrollView, Image, Text, View } from 'react-native';
import Styles from '../style'

export default function Episodes(){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/episodes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

      <ScrollView >
        {data.map((item,index)=>{
          return(
            <View style={[Styles.listItem,{height:85}]} key={item.id} > 
              <Text style={{padding:5,fontSize:15,color:'green',fontWeight:"bold"}}>{item.episode_id}</Text>
              <Text style={{fontSize:15,color:'green',position:"relative",left:30,top:-23,fontWeight:"bold"}}>{item.title}</Text>
              <View style={{position:"absolute",top:15,left:260}}>
              <Text  style={{fontSize:8,color:"green",fontWeight:"bold"}}>air date:</Text>
              <Text style={{left:34,top:-10,fontSize:7,color: '#fff',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 1,
                textShadowColor: '#BBB'}} >{item.air_date}</Text>
              </View>
              <View style={{position:'absolute',left:340,top:16, borderLeftWidth:1, 
                height:10
                 }}>
                    <Text style={{fontSize:8,color:"green",position:"relative",left:2,fontWeight:"bold"}}>season : {item.season}</Text>
                </View >
                <View style={{borderWidth:0.5,borderTopColor: "grey",borderBottomColor: "grey",position:'absolute',left:8,top:30,width:375}}>
                
                </View>
                <View style={{position:"relative",left:4,top:-12}}>
                    <Text style={{fontSize:8,color:"green",fontWeight:"bold"}}>characters:
                        {
                            item.characters.map((item,index)=>{
                                if(index==0){
                                  return(  
                                    <Text style={{position:'absolute',color:"grey"}}>{item}</Text>      
                                   
                                  );
                                }
                                else{
                                    if(index%4==0){
                                        return(        
                                            <Text style={{position:'absolute',color:"grey"}}>,{'\n'}{item} </Text>
                                          );
                                    }
                                    else{
                                        return(        
                                            <Text style={{position:'absolute',color:"grey"}}>,{item}</Text>
                                          );
                                    }
                                  
                                }
                               
                               })
                        }
                    </Text>
                    
                </View>
              
            </View>
          );
        })}
      </ScrollView>
    
    
   
    
  );
};