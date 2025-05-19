import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <Image 
          source={require('../assets/home.png')} 
          style={[
            styles.icon, 
            route.name === 'Home' && styles.activeIcon
          ]} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/ticket.png')} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={[styles.iconContainer, styles.qrContainer]}>
        <Image source={require('../assets/qrCode.png')} style={styles.qrIcon} resizeMode="contain" />
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/profile.png')} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/supportChat.png')} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#178A5C',
    paddingTop: 10,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  },
  qrContainer: {
    backgroundColor: '#178A5C',
    borderRadius: 30,
    width: 60,
    height: 60,
    marginTop: -25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#fff',
    opacity: 0.6,
  },
  qrIcon: {
    width: 32,
    height: 32,
    tintColor: '#fff',
  },
  activeIcon: {
    tintColor: '#fff',
    opacity: 1,
  },
});

export default NavBar; 