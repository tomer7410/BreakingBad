import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,ScrollView, Image, Text, View } from 'react-native';
import Styles from '../style'

export default function Quotes(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/quotes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
      
      <ScrollView  >
        {data.map((item,index)=>{
          return(
            <View style={[Styles.listItem,{height:55}]} key={item.id} > 
              <Text style={{fontSize:10,color:"grey",fontWeight:"bold",padding:4}}>
                  {
                      item.quote.split(" ").map((item,index)=>{
                          if(++index%8==0){
                              return(
                                  <Text>
                                      {item}{'\n'}
                                  </Text>

                              );
                             
                          }
                          else{
                            return(
                                <Text>
                                    {item}{' '}
                                </Text>

                            );      
                        }
                      })
                  }
              </Text>
              <Text style={{position:'absolute',right:30,bottom:10,fontSize:6,color:"grey"}}>
                    {item.author}
              </Text>
              
            </View>
          );
        })}
      </ScrollView>
    
    
   
    
  );
};