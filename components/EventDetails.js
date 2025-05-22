import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const EventDetails = () => {
    const { event } = useRoute().params;
  
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: event.images?.[0]?.url }} style={styles.image} />
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{event.dates?.start?.localDate}</Text>
        <Text style={styles.venue}>{event._embedded?.venues?.[0]?.name}</Text>
        <Text style={styles.description}>{event.info || 'Etkinlik açıklaması bulunamadı.'}</Text>
  
        {event.url && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(event.url)}
          >
            <Text style={styles.buttonText}>Bilet Al</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
  });

  
  export default EventDetails;
