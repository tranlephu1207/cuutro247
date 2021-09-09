import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Duy = () => {
  return (
    <View>
      <Text style={styles.fontSize}>File cua Duy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 18,
  },
});

export default Duy;
