import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const FilterSection = () => {
  const filters = ['All', 'Today', 'Tomorrow', 'This Week', 'This Month'];

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {filters.map((filter, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.filterButton,
              index === 0 && styles.activeFilter
            ]}
          >
            <Text style={[
              styles.filterText,
              index === 0 && styles.activeFilterText
            ]}>
              {filter}
            </Text>
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
  scrollView: {
    flexDirection: 'row',
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
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
  },
});

export default FilterSection; 