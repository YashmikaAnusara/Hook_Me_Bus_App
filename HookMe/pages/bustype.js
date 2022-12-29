import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export default function Bustype() {
  const navigation = useNavigation();

  const Back = () => {
    navigation.navigate('Start_Trip');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
            backgroundColor: '#262626',
          }}>
          <View style={{paddingTop: 25}}>
            <TouchableOpacity onPress={Back}>
              <Image
                source={require('../assets/back.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 30, paddingLeft: 50, position: 'absolute'}}>
            <Text style={{color: '#ffffff', fontSize: 28}}>Start Trip</Text>
          </View>
          <View style={{paddingLeft: 25, paddingTop: 20}}>
            <Text style={{color: '#ffffff', fontSize: 22}}>Bus Type</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  marginLeft: 90,
                  marginBottom: 20,
                  width: 530,
                  // backgroundColor: '#ffffff',
                }}>
                <Image
                  source={require('../assets/bus3.png')}
                  style={{width: 200, height: 150}}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    paddingLeft: 50,
                    fontSize: 20,
                    paddingTop: 130,
                    position: 'absolute',
                  }}>
                  Normal Bus
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 350,

                  marginRight: 100,
                  position: 'absolute',
                  // backgroundColor: '#ffffff',
                }}>
                <Image
                  source={require('../assets/bus4.png')}
                  style={{width: 150, height: 100, marginTop: 20}}
                />
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 20,
                    paddingTop: 130,
                    paddingLeft: 20,
                    position: 'absolute',
                  }}>
                  Intercity Bus
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{paddingLeft: 25, paddingTop: 20}}>
            <Text style={{color: '#ffffff', fontSize: 22}}>Buses</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
