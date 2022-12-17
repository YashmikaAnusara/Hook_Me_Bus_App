import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export default function Signup() {
  const navigation = useNavigation();

  const Back = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
