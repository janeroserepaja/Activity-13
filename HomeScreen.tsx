```tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Logo */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>P</Text>
        </View>

        {/* Shop Name */}
        <Text style={styles.title}>
          Purple Shop
        </Text>

        <Text style={styles.subtitle}>
          Find something you love.
        </Text>

        {/* Welcome Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Welcome!
          </Text>

          <Text style={styles.cardText}>
            Explore our collection of simple and
            beautiful purple-themed products.
          </Text>

          <Text style={styles.featuredText}>
            ✨ Featured Products
          </Text>

          <View style={styles.locationBox}>
            <Text style={styles.locationIcon}>
              📍
            </Text>

            <View>
              <Text style={styles.locationLabel}>
                Shop Location
              </Text>

              <Text style={styles.locationText}>
                Calbayog City
              </Text>
            </View>
          </View>
        </View>

        {/* Browse Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.buttonText}>
            Browse Products
          </Text>
        </TouchableOpacity>

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

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#9B7BC1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    marginTop: 35,
    marginBottom: 25,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5D9F2',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4B3B61',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#7D7188',
  },

  featuredText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9B7BC1',
    marginTop: 15,
  },

  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F5FC',
    borderRadius: 12,
    padding: 12,
    marginTop: 15,
  },

  locationIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  locationLabel: {
    fontSize: 11,
    color: '#9A8FA8',
    marginBottom: 2,
  },

  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B3B61',
  },

  button: {
    backgroundColor: '#9B7BC1',
    borderRadius: 14,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
```
