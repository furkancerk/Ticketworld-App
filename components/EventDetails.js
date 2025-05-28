import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const EventDetails = () => {
  const { event } = useRoute().params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header />

      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#000" />
      </TouchableOpacity>

      <ScrollView style={styles.container}>
        <Image source={{ uri: event.images?.[0]?.url }} style={styles.image} />
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{event.dates?.start?.localDate}</Text>
        <Text style={styles.venue}>{event._embedded?.venues?.[0]?.name}</Text>
        <Text style={styles.description}>
          {event.info || 'Etkinlik açıklaması bulunamadı.'}
        </Text>

        {event.url && (
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(event.url)}>
            <Text style={styles.buttonText}>Bilet Al</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: '100%', height: 220, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  date: { fontSize: 16, color: '#666', marginBottom: 4 },
  venue: { fontSize: 16, color: '#666', marginBottom: 10 },
  description: { fontSize: 14, lineHeight: 20, marginBottom: 20 },
  button: {
    backgroundColor: '#178A5C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default EventDetails;

