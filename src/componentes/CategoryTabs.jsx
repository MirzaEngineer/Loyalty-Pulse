import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['All Items', 'Beauty', 'Food', 'Gift Card', 'Sports', 'Tech'];

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()} 
      contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 8 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSelectedCategory(item)}
          style={[
            styles.tabButton,
            selectedCategory === item && styles.activeTab
          ]}
        >
          <Text
            style={[
              styles.tabText,
              selectedCategory === item && styles.activeTabText
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    // flexDirection:"row",
    // gap:10,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // backgroundColor: '#fff'
  },
  activeTab: {
    backgroundColor: '#FFF',
    borderColor: '#E6E9EF'
  },
  tabText: {
    color: '#333'
  },
  activeTabText: {
    color: '#E85D43',
    fontSize:14,
    fontWeight:"600"
  }
});
