import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export default function Signup() {
  const navigation = useNavigation();

  const Back = () => {
    navigation.navigate('Login');
  };
  const SignUp = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#262626',
            flex: 1,
          }}>
          <View style={{position: 'absolute', paddingTop: 45}}>
            <TouchableOpacity onPress={Back}>
              <Image
                source={require('../assets/back.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 40, paddingLeft: 50}}>
            <Text style={{color: '#ffffff', fontSize: 28}}>
              Welcome Hook Me
            </Text>
            <Text style={{color: '#ffffff', fontSize: 15}}>
              User Registration
            </Text>
          </View>
          <View style={{paddingTop: 50}}>
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Enter your first name
            </Text>
            <TextInput
              placeholder="Enter your first name"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Enter your NIC number
            </Text>
            <TextInput
              placeholder="Enter your NIC number"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Enter your email
            </Text>
            <TextInput
              placeholder="Enter your email"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Enter your mobile number
            </Text>
            <TextInput
              placeholder="Enter your mobile number"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                InputType: 'numeric',
              }}
            />
          </View>
          <View style={{paddingTop: 20}}>
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Enter your password
            </Text>
            <TextInput
              placeholder="Enter your password"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              Re-enter your password
            </Text>
            <TextInput
              placeholder="Re-enter your password"
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 15,
              marginBottom: '7%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#A0A0A0',
                height: 40,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}
              onPress={SignUp}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 6,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
