import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Purple Shop</Text>
        <Text style={styles.subtitle}>
          Find something you love.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F2FF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4B3B61',
  },
  subtitle: {
    fontSize: 15,
    color: '#8A78A6',
    marginTop: 8,
  },
});
