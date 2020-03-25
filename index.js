import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
 
class Login extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Text style={styles.text1Style}>CodeGranted</Text>
               <Text style={styles.text2Style}>Wellcome</Text>

               <View style={{
                   height:60,
                   width:'90%',
                   backgroundColor:'#38b6ff',
                   borderRadius:30,
                   marginTop:50,
                   alignItems:'center',
                   justifyContent:'center'
               }}>
                   

                    <View style={{
                        height:'95%',
                         width:'99%', 
                         backgroundColor:'white', 
                         borderRadius:30, 
                         justifyContent:'center', 
                         }}>

                             <TextInput
                             style={{
                                 marginLeft:20,
                                 fontSize:20,
                             }}
                                placeholder="Email or Username"
                             />
                       
                    </View>

               </View>

               <View style={{
                   height:60,
                   width:'90%',
                   backgroundColor:'#38b6ff',
                   borderRadius:30,
                   marginTop:10,
                   alignItems:'center',
                   justifyContent:'center'
               }}>
                   

                    <View style={{
                        height:'95%',
                         width:'99%', 
                         backgroundColor:'white', 
                         borderRadius:30, 
                         justifyContent:'center', 
                         }}>

                             <TextInput
                             style={{
                                 marginLeft:20,
                                 fontSize:20,
                             }}
                                placeholder="Password"
                                secureTextEntry={true}
                             />
                       
                    </View>

               </View>
               <TouchableOpacity style={{alignSelf:'flex-end', marginRight:'7%', marginTop:10}}>
               <Text style={{fontSize:16, textDecorationLine:'underline', color:'#38b6ff'}}>Forgot Password ?</Text>
                    
               </TouchableOpacity>

               <View style={{
                   height:60,
                   width:'90%',
                   backgroundColor:'#38b6ff',
                   borderRadius:30,
                   marginTop:60,
                   alignItems:'center',
                   justifyContent:'center'

               }}>
                   

                    <Text style={{
                        fontSize:25,
                        fontWeight:'bold',
                        color:'white'
                    }}>LOGIN</Text>

               </View>

               <View style={{flexDirection:'row', marginTop:10}}>
                    <Text style={{fontSize:16}}>New User?</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:16, color:'#38b6ff', marginLeft:5}}>Sign Up</Text>
                        </TouchableOpacity>    
               </View>

           </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    text1Style:{
        fontSize:40,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#38b6ff'
    },
    text2Style:{
        fontSize:25,
        fontWeight:'bold',   
    }
})
