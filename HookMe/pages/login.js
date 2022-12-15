import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../assets/back4.png')}
          style={{width: '100%', height: '100%'}}
        />
        <View style={{position: 'absolute', paddingTop: 40, paddingLeft: 20}}>
          <Text style={{color: '#ffffff', fontSize: 28}}>Welcome Hook Me</Text>
          <Text style={{color: '#ffffff', fontSize: 15}}>
            Trusted Travel Platform
          </Text>
        </View>
        <View style={{position: 'absolute', paddingTop: 150}}>
          <Image source={require('../assets/bus2.png')} />
        </View>
        <TextInput
          placeholder="Enter your username"
          style={{color: '#ffffff', position: 'absolute'}}
        />
      </View>
    </SafeAreaView>
  );
}
