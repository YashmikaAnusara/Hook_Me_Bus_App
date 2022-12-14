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
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

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
export default function Trip({route}) {
  const navigation = useNavigation();
  const type = route.params.type;

  const Back = () => {
    navigation.navigate('Bus_Type');
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
              showsUserLocation
              initialRegion={{
                latitude: 6.914656,
                longitude: 79.972773,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {type === 'normal' ? (
                <>
                  <Marker
                    coordinate={{latitude: 6.89369, longitude: 79.979003}}
                    image={require('../assets/trackbus.png')}
                    style={{transform: [{rotate: '5deg'}]}}
                  />

                  <Marker
                    coordinate={{latitude: 6.914757, longitude: 439.972267}}>
                    <Callout>
                      <Text>I'm Here</Text>
                    </Callout>
                  </Marker>
                </>
              ) : (
                <>
                  <Marker
                    coordinate={{latitude: 6.914656, longitude: 79.972773}}
                    image={require('../assets/trackbus.png')}
                    style={{transform: [{rotate: '210deg'}]}}
                  />
                  <Marker
                    coordinate={{latitude: 6.914757, longitude: 439.972267}}>
                    <Callout>
                      <Text>I'm Here</Text>
                    </Callout>
                  </Marker>
                </>
              )}
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
            <Text style={{color: '#ffffff', fontSize: 28}}>Trip</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              paddingTop: 100,
            }}>
            <View
              style={{position: 'absolute', paddingTop: 130, paddingLeft: 15}}>
              {type === 'normal' ? (
                <>
                  <Text style={{color: '#ffffff', fontSize: 20}}>
                    Normal Bus
                  </Text>
                </>
              ) : (
                <Text style={{color: '#ffffff', fontSize: 20}}>
                  Intercity Bus
                </Text>
              )}
              <Text style={{color: '#ffffff', fontSize: 20, marginTop: 10}}>
                Route No: 254
              </Text>
              <Text style={{color: '#ffffff', fontSize: 20, marginTop: 40}}>
                Route :
              </Text>
              <Text style={{color: '#ffffff', fontSize: 20, marginTop: 5}}>
                254 -Kandana to Kelaniya
              </Text>
            </View>
            <View style={{paddingLeft: 180}}>
              {type === 'normal' ? (
                <>
                  <Image
                    source={require('../assets/bus3.png')}
                    style={{width: 200, height: 150}}
                  />
                </>
              ) : (
                <Image
                  source={require('../assets/bus4.png')}
                  style={{width: 200, height: 150}}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
