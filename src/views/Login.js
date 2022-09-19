import { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

function LOGIN_SCREEN (){
    return(
        <View 
    style={{
      backgroundColor: '#3498DB',
      flex: 1,
    }}>
          <View 
    style={{
      backgroundColor: 'white',
      margin:10,
      flex: 1,
      borderRadius:10,
    }}>
        <View 
          style={{
            flex:1,
            marginVertical:20,
          }}>

          {/* header */}
          <View 
            style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
          }}>
          <Text 
            style={{
              fontSize:30,
              fontWeight:'bold',
              color:'black'
          }} >Login
          </Text>
          </View>


          {/* body */}
          <View style={{
            flex:6,
          }}>
            <View style={{
              backgroundColor:'white',
              margin:30,
              }}>
                <View style={{
                  marginBottom:20,
                }}>
                  <Text style={{
                    color:'black',
                  }}>
                     username
                     </Text>

                  <View style={{
                    flexDirection:'row',
                    borderBottomColor:'gray',
                    borderBottomWidth:1,
                  
                  }}>
                    <View style={{
                      justifyContent:'center',
                      alignItems:'center',
                      padding:10,
                    }}>
                      {/* <Icon name="user" /> */}
                    </View>
                    <View style={{
                      flex:1,
                    }}>
                        <TextInput 
                        style={{}}  placeholder={'type in your username'}/>
                    </View>
                  </View>

                </View>
                    {/* password */}
                <View>
                  <Text style={{
                    color:'black',
                  }}>
                     password
                     </Text>

                  <View style={{
                    flexDirection:'row',
                    borderBottomColor:'gray',
                    borderBottomWidth:1,
                  
                  }}>
                    <View style={{
                      justifyContent:'center',
                      alignItems:'center',
                      padding:10,
                    }}>
                      {/* <Icon name="user" /> */}
                    </View>
                    <View style={{
                      flex:1,
                    }}>
                        <TextInput 
                          secureTextEntry={true}
                          placeholder={'type in your password'}/>
                    </View>
                  </View>
                </View>
                {/* fogot pass */}
                <View style={{
                   marginTop:10,
                   alignItems:'flex-end',
                }}>
                  <Text style={{
                   color:'black',
                  }}>Forgot Password</Text>
                </View>
                
                {/* login button */}
              <TouchableOpacity>  
                <View style={{
                  justifyContent:'center',
                  alignItems:'center',
                  marginVertical:20,
                  backgroundColor:'blue',
                  height:45,
                  borderRadius:15,
                }}>
                  
                    <Text style={{
                      color:'white',
                    }}>LOGIN</Text>
                  
                </View>
              </TouchableOpacity>   

            </View>
            <View style={{
              marginVertical:20,
              justifyContent:'center',
              alignItems:'center',
            }}>
              {/* <Text>Or Sign Up Using</Text> */}
              <View>
                {/* <Icon/> */}
              </View>
            </View>
          </View>

          {/* footer */}
          <View style={{
              flex:2,
              justifyContent:'center',
              alignItems:'center'
          }}>
            <Text>Or Sign Up Using</Text>
            {/* button sign up */}
            <TouchableOpacity 
              style={{
                padding:20,
            }}>
              <Text style={{
                color:'black',
                fontWeight:'500',
              }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    );
};
 export default LOGIN_SCREEN;