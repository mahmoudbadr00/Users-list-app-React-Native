import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>User Details</Text>
      <Text style={styles.label}>
        Full Name: <Text style={styles.value}>{user.name}</Text>
      </Text>
      <Text style={styles.label}>
        Email: <Text style={styles.value}>{user.email}</Text>
      </Text>
      <Text style={styles.label}>
        Username: <Text style={styles.value}>{user.username}</Text>
      </Text>
      <Text style={styles.label}>
        Phone: <Text style={styles.value}>{user.phone}</Text>
      </Text>
      <Text style={styles.label}>
        Website: <Text style={styles.value}>{user.website}</Text>
      </Text>
      <Text style={styles.label}>
        Company: <Text style={styles.value}>{user.company.name}</Text>
      </Text>
      <Text style={styles.label}>
        Address: <Text style={styles.value}>{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaf2f8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
});
