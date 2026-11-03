import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  const products = [
    { id: 1, name: 'Purple Hoodie', price: 450 },
    { id: 2, name: 'Classic Bag', price: 350 },
    { id: 3, name: 'Cute Keychain', price: 120 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Purple Shop</Text>

        <Text style={styles.subtitle}>
          Find something you love.
        </Text>

        <Text style={styles.sectionTitle}>Featured Products</Text>

        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>
              ₱{product.price}.00
            </Text>
          </View>
        ))}
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
    paddingHorizontal: 30,
    paddingTop: 70,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4B3B61',
    marginTop: 40,
    marginBottom: 15,
  },
  productCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  productName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4B3B61',
  },
  productPrice: {
    fontSize: 15,
    color: '#8A5CC2',
    marginTop: 5,
  },
});
