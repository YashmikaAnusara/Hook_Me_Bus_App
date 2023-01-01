import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function Aboutus() {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        alert(position);
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  });
  return (
    <View>
      <Text>Aboutus</Text>
    </View>
  );
}
