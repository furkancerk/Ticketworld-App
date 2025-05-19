import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image 
          source={require('../assets/Ticketworld.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Feather name="shopping-cart" size={24} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#178A5C',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  logo: {
    width: 120,
    height: 30,
  },
});

export default Header; 