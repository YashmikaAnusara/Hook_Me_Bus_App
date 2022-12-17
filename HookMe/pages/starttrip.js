import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
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
export default function Starttrip() {
  const navigation = useNavigation();

  const Back = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
      <ScrollView>
        <View
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
          }}>
          <View style={{paddingTop: 260}}>
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
            source={require('../assets/back2.png')}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
          <View style={{paddingTop: 25, position: 'absolute'}}>
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
          <View style={{position: 'absolute', width: '100%', paddingTop: 100}}>
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              From
            </Text>
            <TextInput
              placeholder="From"
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
            <Text style={{color: '#ffffff', paddingLeft: 15, fontSize: 15}}>
              To
            </Text>
            <TextInput
              placeholder="To"
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
          <View style={{position: 'absolute'}}>
            <TouchableOpacity>
              <Text style={{color: '#ffffff'}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
