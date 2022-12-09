import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

export default Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        marginTop: -50,
      }}>
      <Image
        source={require('../assets/splash_bus.png')}
        style={{width: 400, height: 200}}
      />
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FFFFFF',
            paddingTop: 70,
          }}>
          Hook Me
        </Text>
      </View>
      <AnimatedLottieView
        style={{marginTop: 200, color: '#FFFFFF'}}
        source={require('../assets/86697-wave-loading-animation-websiteapp-loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};
