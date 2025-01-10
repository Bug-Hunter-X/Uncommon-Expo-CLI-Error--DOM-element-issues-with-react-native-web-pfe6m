import React from 'react';
import { Text, View } from 'react-native';

// Problematic library usage (example)
// import MyLibrary from 'problematic-library';

export default function App() {
  // Conditional rendering to handle potential undefined window object
  return (
    <View>
      {typeof window !== 'undefined' && (
        <Text>This content will only render in the browser.</Text>
      )}
      <Text>This content is always shown.</Text> 
    </View>
  );
}
