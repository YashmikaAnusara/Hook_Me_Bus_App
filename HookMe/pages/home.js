import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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
export default function Home() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%', flex: 1}}>
      <View
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          flex: 1,
        }}>
        <View style={{paddingTop: 110}}>
          <MapView
            style={{width: 500, height: 500}}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            customMapStyle={Darkmap}
            initialRegion={{
              latitude: 6.914656,
              longitude: 79.972773,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{latitude: 6.914656, longitude: 79.972773}}
              image={require('../assets/trackbus.png')}
              style={{transform: [{rotate: '210deg'}]}}
            />
            <Marker
              coordinate={{latitude: 6.89369, longitude: 79.979003}}
              image={require('../assets/trackbus.png')}
              style={{transform: [{rotate: '5deg'}]}}
            />
            <Marker
              coordinate={{latitude: 6.935203, longitude: 79.929737}}
              image={require('../assets/trackbus.png')}
              style={{transform: [{rotate: '85deg'}]}}
            />
          </MapView>
        </View>
        <Image
          source={require('../assets/back3.png')}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
        <View
          style={{
            paddingTop: 40,
            paddingLeft: 20,
            position: 'absolute',
          }}>
          <Text style={{color: '#ffffff', fontSize: 28}}>Welcome Yashmika</Text>
          <Text style={{color: '#ffffff', marginTop: 5, fontSize: 15}}>
            Trusted Travel Platform
          </Text>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/profile.png')}
                style={{
                  position: 'absolute',
                  marginLeft: 300,
                  marginTop: -62,
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              width: 80,
              padding: 5,
              marginTop: 20,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Start Trip
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../assets/bus1.jpg')}
          style={{
            width: '60%',
            height: '20%',
            position: 'absolute',
            marginTop: 480,
            marginLeft: 140,
          }}
        />
        <View
          style={{
            paddingTop: 510,
            paddingLeft: 10,
            paddingRight: 190,
            position: 'absolute',
          }}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 15,
              lineHeight: 23,
            }}>
            We are provide the Private Buses & Sri Lanka Transport Board Buses
          </Text>
          <View style={{paddingTop: 10, paddingRight: 40, paddingLeft: 40}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffffff',
                height: 30,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text
                style={{textAlign: 'center', marginTop: 4, fontWeight: 'bold'}}>
                About Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#525252',
            marginTop: 70,
            height: '100%',
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}>
          <View>
            <Image
              source={require('../assets/Home.png')}
              style={{marginLeft: 40, marginTop: 18, height: 30, width: 30}}
            />
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                marginLeft: 37,
                marginTop: 2,
              }}>
              Home
            </Text>
          </View>
          <View
            style={{position: 'absolute', paddingLeft: 140, marginTop: -30}}>
            <Image
              source={require('../assets/Sback.png')}
              style={{height: 100, width: 100}}
            />
            <Image
              source={require('../assets/Search.png')}
              style={{marginTop: -75, marginLeft: 33, height: 35, width: 35}}
            />
          </View>
          <View style={{position: 'absolute'}}>
            <Image
              source={require('../assets/Trip.png')}
              style={{marginLeft: 310, marginTop: 18, height: 30, width: 30}}
            />
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                marginLeft: 309,
                marginTop: 2,
              }}>
              Trips
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
