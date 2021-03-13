import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,ScrollView, Image, Text, View,TouchableOpacity } from 'react-native';
import Styles from '../style'
import * as RootNavigation from '../compoents/rootNavigation';
export default function Ap(){
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView >
        {data.map((item,index)=>{
          return(
            <TouchableOpacity style={Styles.listItem} onPress={()=>{
              RootNavigation.navigate('characterDetails',{character:item})
            }}>
                 <View key={item.id} > 
              <Image style={Styles.imageItem} source={{uri:item.img}}></Image>
              <Text style={{position:'absolute',left:110,top:5,fontSize:14,color:'green',fontWeight: 'bold'}}>{item.name}</Text>
              <View style={{position:'absolute',left:250,top:10,width:115,height:25,backgroundColor:((`#f5f5dc`)),alignItems: 'center'}} >
                  <Text style={{textAlign: 'center', // <-- the magic
                      color:'green',
                      fontSize: 10,
                      padding:5,
                      width: 100}}>{item.nickname}</Text>
              </View>
              <View style={{borderWidth:1,backgroundColor: (`#dcdcdc`),position:'absolute',left:110,top:39,width:255}}>
                
              </View>

              <View style={{position:"absolute",left:110,top:40}}>
                <Text style={{color: '#fff',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 1,
                textShadowColor: '#BBB',}}>occupation
                </Text>
                <Text style={{fontSize:9,left:1}}>
                  {
                    
                    item.occupation.map((item,index)=>{
                      if(!index==0){
                        return(        
                          <Text style={{position:'absolute'}}>,{'\n'}{item}</Text>
                        );
                      }
                      else{
                        return(        
                          <Text style={{position:'absolute'}}>{item}</Text>
                        );
                      }
                     
                     })
                  }
                </Text>

              
              </View>
              <View style={{position:'absolute',left:270,top:50, borderLeftWidth:2, 
                height:50
                 }}>
                <View >
                <Text style={{textAlign: 'center',color:'green', // <-- the magic
                      fontSize: 10,                      
                      width: 100,
                      }}>status</Text>
                    <Text style={{textAlign: 'center', // <-- the magic
                      fontWeight: 'bold',
                      fontSize: 10,
                      color:'green',
                      width: 100,
                      }}>{item.status}
                    </Text>  
                </View>
              </View> 
            </View>
            </TouchableOpacity>
           
          );
        })}
      </ScrollView>    
  );
};