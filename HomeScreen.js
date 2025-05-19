import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import PopularOnes from './components/PopularOnes';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import axios from 'axios';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const API_KEY = 'dsCUbvntIFhWJsZ7hg9q0bTSuWHKN61R';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log('Making API call...');
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events.json?` +
          `apikey=${API_KEY}` +
          `&size=200` +
          `&sort=random` +
          `&classificationName=music` +
          `&genreId=KnvZfZ7vAeA` +
          `&countryCode=US` +
          `&includeTBA=no` +
          `&includeTest=no` +
          `&preferredCountry=us` +
          `&fields=popularity,totalElements,dates,name,images,_embedded,attractions`
        );
        
        console.log('API response received');
        
        if (response.data._embedded && response.data._embedded.events) {
          const filteredEvents = response.data._embedded.events
            .filter(event => 
              event.dates.status.code === 'onsale' &&
              new Date(event.dates.start.dateTime) > new Date() &&
              event.images && event.images.length > 0 &&
              event.images.some(img => img.width >= 800 && img.height >= 500) &&
              event._embedded?.attractions?.[0] &&
              !event._embedded.attractions[0].name.toLowerCase().includes('eagles')
            )
            .map(event => ({
              ...event,
              images: [event.images.find(img => img.width >= 800 && img.height >= 500) || event.images[0]]
            }));

          const artistEvents = new Map();
          
          const shuffledEvents = filteredEvents.sort(() => Math.random() - 0.5);
          
          shuffledEvents.forEach(event => {
            const artistId = event._embedded.attractions[0].id;
            if (!artistEvents.has(artistId)) {
              artistEvents.set(artistId, event);
            }
          });

          const uniqueEvents = Array.from(artistEvents.values())
            .slice(0, 5);

          console.log(`${uniqueEvents.length} unique events filtered`);
          setEvents(uniqueEvents);
        } else {
          console.log('No events found');
        }
      } catch (error) {
        console.error('API error:', error.response ? error.response.data : error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <PopularOnes events={events || []} />
        <Categories />
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;

