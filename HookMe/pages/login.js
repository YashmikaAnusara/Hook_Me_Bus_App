import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import RadialGradient from 'react-native-radial-gradient';

const Darkmap = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];
export default function Login() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      {/* <ScrollView> */}
      <View style={{height: '100%', width: '100%', position: 'relative'}}>
        <Image
          source={require('../assets/back2.png')}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
        <View style={{paddingTop: 30, paddingLeft: 20}}>
          <Text style={{color: '#ffffff', fontSize: 28}}>Welcome Thivaka</Text>
          <Text style={{color: '#ffffff', marginTop: 5, fontSize: 15}}>
            Trusted Travel Platform
          </Text>
        </View>
        {/* <MapView
          style={{width: 500, height: 500}}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          customMapStyle={Darkmap}
          initialRegion={{
            latitude: 6.914656,
            longitude: 79.972773,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        <Image
          source={require('../assets/bus1.jpg')}
          style={{
            width: '60%',
            height: '20%',
            position: 'absolute',
            marginTop: 500,
            marginLeft: 140,
          }}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
