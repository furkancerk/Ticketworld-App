import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchText.length < 3) {
        setSearchResults([]);
        return;
      }
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=dsCUbvntIFhWJsZ7hg9q0bTSuWHKN61R&keyword=${searchText}`
        );
        const events = response.data._embedded?.events || [];
        setSearchResults(events);
      } catch (error) {
        console.error('Search error:', error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSearchResults();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const handleSelectEvent = (event) => {
    setSearchText('');
    setSearchResults([]);
    navigation.navigate('EventDetails', { event });
  };

  return (
  
    <View style={styles.headerContainer}>
    <Image source={require('../assets/Ticketworld.png')} style={styles.logo} />
      
      <TextInput
        style={styles.searchInput}
        placeholder="Etkinlik Ara..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Ionicons name="cart-outline" size={32} color="#ffffff" style={styles.cartIcon} />

      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          style={styles.dropdown}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectEvent(item)} style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 12,
    backgroundColor: '#178A5C',
    paddingHorizontal: 16,
    zIndex: 100,
    position: 'relative',
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  searchInput: {
    height: 36,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  cartIcon: {
    position: 'absolute',
    right: 20,
  },
  dropdown: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 95,
    left: 16,
    right: 16,
    zIndex: 200,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Header;
