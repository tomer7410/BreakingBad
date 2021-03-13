import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    header:{
        backgroundColor:'gray',
        //flex:3,
        width:'100%',
        height:'18%',
        left:0,
        top:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage:{
        width: 120, height:70,
        alignContent: 'center',
        top:15   
    },
    footerImage:{
      width: 70, height:70,backgroundColor:"green" 

    },
    title:{
      height:'8%',
      backgroundColor:'green'
    },
    titleText:{
      color:'white',alignContent:'center',alignItems:'center'
    },
    body:{
      height:"70%",
      padding:5  
    },
    footer:{
      height:'12%',
      backgroundColor:'green',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:10,
      
    },
    footerItem:{
      height:30,
      width:50,
    },
    imageItem:{
      width:95,
      height:95,
      left:2
      
     

    },
    listItem:{
      marginBottom:5,
      flex: 0.3,
      padding:3,
      borderColor: 'rgba(158, 150, 150, .3)',
      borderWidth: 2,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height:110
    },
   
  });
  export default styles