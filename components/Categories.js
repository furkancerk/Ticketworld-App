import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.navigate('CategoryDetails', { category: 'sport' })}>
            <ImageBackground
              source={require('../assets/sport.png')}
              style={styles.topCategory}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay} />
              <Text style={styles.categoryText}>Sport</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CategoryDetails', { category: 'music' })}>
            <ImageBackground
              source={require('../assets/concert.png')}
              style={styles.topCategory}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay} />
              <Text style={styles.categoryText}>Concert</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('CategoryDetails', { category: 'film' })}>
        <ImageBackground
          source={require('../assets/cinema.png')}
          style={styles.bottomCategory}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.overlay} />
          <Text style={styles.categoryText}>Cinema</Text>
        </ImageBackground>

        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'RedditSansCondensed-SemiBold',
    color: '#178A5C',
    marginBottom: 25,
  },
  categoriesContainer: {
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  topCategory: {
    width: 165,
    height: 134,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#178A5C',
  },
  bottomCategory: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#178A5C',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'RedditSansCondensed-SemiBold',
    zIndex: 1,
  },
});

export default Categories; 