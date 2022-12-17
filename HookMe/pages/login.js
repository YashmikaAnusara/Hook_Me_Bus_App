import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();

  const SigninHandler = () => {
    navigation.navigate('Home');
  };

  const SingupHandler = () => {
    navigation.navigate('SingUp');
  };

  return (
    <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#262626',
            flex: 1,
          }}>
          <View style={{position: 'absolute', paddingTop: 40, paddingLeft: 20}}>
            <Text style={{color: '#ffffff', fontSize: 28}}>
              Welcome Hook Me
            </Text>
            <Text style={{color: '#ffffff', fontSize: 15}}>
              Trusted Travel Platform
            </Text>
          </View>
          <View style={{position: 'absolute', paddingTop: 150}}>
            <Image source={require('../assets/bus2.png')} />
          </View>
          <View style={{paddingTop: 470, paddingBottom: '40.5%'}}>
            <TextInput
              placeholder="Enter your username"
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
          </View>
          <View
            style={{
              position: 'absolute',
              paddingTop: 620,
              width: '100%',
              paddingLeft: 30,
              paddingRight: 30,
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
              onPress={SigninHandler}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 6,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
            <View style={{paddingTop: 20, paddingLeft: 18}}>
              <Text style={{color: '#ffffff', marginLeft: 50}}>
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{color: '#ffffff', marginLeft: 200, marginTop: -19}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
