import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import NavBar from './NavBar';

const CategoryDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
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
            {filters.map((filter, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.filterButton,
                  selectedFilter === filter && styles.activeFilter
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text style={[
                  styles.filterText,
                  selectedFilter === filter && styles.activeFilterText
                ]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Buraya kategori detayları gelecek */}
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
});

export default CategoryDetails; 