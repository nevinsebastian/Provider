// AddActivityScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add your activity here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddActivityScreen;
