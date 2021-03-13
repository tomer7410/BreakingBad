
import React ,{Component}from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View ,Image,TouchableOpacity,Text} from 'react-native';
import Styles from './style'
import Characters from './pages/temps'
import CharacterDetails from './pages/characterDetails'
import Episodes from './pages/episodes'
import Quotes from './pages/quotes'
import FooterLogos from './compoents/buttons'
import {navigationRef} from './compoents/rootNavigation';

const RootStack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.headerViewRef=React.createRef()
   
  
  }

  render() {
    
    return (
      <View ref={this.headerViewRef}>
        
      <View style={[Styles.header]}>
        <Image  style={Styles.headerImage} source={require('./assets/breakingBadImgm.gif')}></Image>
     </View>
     
  <NavigationContainer ref={navigationRef}>
      
     <View style={Styles.body}>
     <RootStack.Navigator >
          <RootStack.Screen name="quotes"  component={Quotes} options={{
            title: 'Qoutes',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>         
          <RootStack.Screen name="characters"  component={Characters} options={{
            title: 'Characters',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}/>
          <RootStack.Screen name="episodes"  component={Episodes} options={{
            title: 'Episodes',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <RootStack.Screen name="characterDetails"  component={CharacterDetails} options={{
            
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>                                         
       </RootStack.Navigator>
     </View>
     <View style={{backgroundColor:"green"}}>
        <FooterLogos  screenName="a"/>
    </View> 
    </NavigationContainer>
  </View>
    );
  }
}
