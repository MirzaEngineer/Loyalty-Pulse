import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = ({ onSelectDate, style }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    if (onSelectDate) {
      onSelectDate(day.dateString); // Parent ko selected date bhej raha hai
    }
  };

  return (
    <View style={{
      marginTop: 10, width: 100,
      borderWidth: 2
    }}>
      <Calendar
        // onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#E82004' },
        }}
        style={{
          transform: [{ scale: 0.9
            
          }], 
          borderRadius: 10,
          elevation: 3,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        }}
      />
    </View>
  );
};

export default CustomCalendar;
