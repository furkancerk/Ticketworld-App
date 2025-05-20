import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import NavBar from './NavBar';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';



const CategoryDetails = () => {
const [selectedFilter, setSelectedFilter] = useState('All');
const route = useRoute();
const { category } = route.params || {};
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);
const API_KEY = 'dsCUbvntIFhWJsZ7hg9q0bTSuWHKN61R';
useEffect(() => {
  const fetchCategoryEvents = async () => {
    if (!category) return;
    try {
      setLoading(true);
      const response = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json`,
        {
          params: {
            apikey: API_KEY,
            classificationName: category,
            countryCode: 'US',
            size: 20,
          },
        }
      );

      const results = response.data._embedded?.events || [];
      setEvents(results);
    } catch (err) {
      console.error('API error:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchCategoryEvents();
}, [category]);
const getFilteredEvents = () => {
  if (selectedFilter === 'All') return events;

  const today = moment().startOf('day');
  const tomorrow = moment().add(1, 'day').startOf('day');
  const endOfToday = moment().endOf('day');
  const endOfTomorrow = moment().add(1, 'day').endOf('day');
  const endOfWeek = moment().endOf('isoWeek');
  const endOfMonth = moment().endOf('month');

  return events.filter((event) => {
    const eventDate = moment(event.dates.start.dateTime);

    switch (selectedFilter) {
      case 'Today':
        return eventDate.isBetween(today, endOfToday, null, '[]');
      case 'Tomorrow':
        return eventDate.isBetween(tomorrow, endOfTomorrow, null, '[]');
      case 'This Week':
        return eventDate.isBetween(today, endOfWeek, null, '[]');
      case 'This Month':
        return eventDate.isBetween(today, endOfMonth, null, '[]');
      default:
        return true;
    }
  });
};

  const filters = ['All', 'Today', 'Tomorrow', 'This Week', 'This Month'];


  return (
    
    <View style={styles.container}>
      <Header />
      

      <ScrollView style={styles.scrollView}>
        <View style={styles.filterContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
          >
            <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.backFilterButton}
  >
    <Ionicons name="chevron-back" size={20} color="#fff" />
  </TouchableOpacity>
            {filters.map((filter, index) => (
              <TouchableOpacity
              key={index}
              style={[styles.filterButton, selectedFilter === filter && styles.activeFilter]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilterText]}>
                {filter}
              </Text>
            </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {loading ? (
  <ActivityIndicator size="large" color="#178A5C" style={{ marginTop: 20 }} />
) : (
  getFilteredEvents().map((event, index) => (

    <View key={index} style={styles.eventContainer}>
      <Image
        source={{ uri: event.images?.[0]?.url }}
        style={styles.eventImage}
      />
      <View style={styles.eventInfo}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventDate}>{event.dates.start.localDate}</Text>
        <Text style={styles.eventVenue}>
          {event._embedded?.venues?.[0]?.name}
        </Text>
      </View>
    </View>
  ))
)}

      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  
  eventInfo: {
    flex: 1,
  },
  
  eventName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  
  eventDate: {
    color: '#555',
    fontSize: 14,
  },
  
  eventVenue: {
    color: '#888',
    fontSize: 13,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  filterContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterScroll: {
    paddingHorizontal: 25,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#178A5C',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'RedditSansCondensed-Regular',
  },
  activeFilterText: {
    color: '#fff',
    fontFamily: 'RedditSansCondensed-SemiBold',
},
backFilterButton: {
  backgroundColor: '#178A5C',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 20,
  marginRight: 8,
  justifyContent: 'center',
  alignItems: 'center',
},

  },
);

export default CategoryDetails; 