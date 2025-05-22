import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const PopularOnes = ({ events = [] }) => {
  if (!events || events.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Popular Ones</Text>
        <Text style={styles.noEvents}>Loading events...</Text>
      </View>
    );
  }
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Ones</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {events.map((event, index) => (
          <TouchableOpacity
          key={event.id || index}
          style={styles.eventCard}
          onPress={() => navigation.navigate('EventDetails', { event })}
        >
          <ImageBackground
            source={{ uri: event.images?.[0]?.url }}
            style={styles.eventImage}
            resizeMode="cover"
          >
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {new Date(event.dates.start.dateTime).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventName} numberOfLines={2}>
                {event.name || 'No name available'}
              </Text>
            </View>
            <View style={styles.blackOverlay}>
              <View style={[styles.gradientOverlay, { opacity: 0.3, height: 70, bottom: -20 }]} />
              <View style={[styles.gradientOverlay, { opacity: 0.5, height: 60, bottom: -10 }]} />
              <View style={[styles.gradientOverlay, { opacity: 0.7 }]} />
              <View style={styles.locationContainer}>
                <Feather name="map-pin" size={14} color="#178A5C" style={styles.locationIcon} />
                <Text style={styles.eventVenue} numberOfLines={1} ellipsizeMode="tail">
                  {event._embedded?.venues?.[0]?.name || 'Venue TBA'}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontFamily: 'RedditSansCondensed-SemiBold',
    color: '#178A5C',
    marginBottom: 15,
  },
  noEvents: {
    fontSize: 16,
    fontFamily: 'RedditSansCondensed-Regular',
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  scrollView: {
    flexDirection: 'row',
  },
  eventCard: {
    width: 300,
    height: 200,
    marginRight: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  eventInfo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    padding: 20,
    paddingBottom: 10,
  },
  blackOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.85,
  },
  eventName: {
    fontSize: 16,
    fontFamily: 'RedditSansCondensed-SemiBold',
    color: '#fff',
    marginBottom: 0,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  locationContainer: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '50%',
    zIndex: 1,
  },
  locationIcon: {
    marginRight: 6,
    color: '#178A5C',
  },
  eventVenue: {
    fontSize: 10,
    fontFamily: 'RedditSansCondensed-Regular',
    color: '#fff',
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  dateContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  dateText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'RedditSansCondensed-Regular',
  },
});

export default PopularOnes; 