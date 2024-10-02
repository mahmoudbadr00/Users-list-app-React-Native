import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserScreen({ navigation }) {
  const [userList, setUserList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUserList(res.data);
        setSearchResults(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = text => {
    setQuery(text);
    if (text) {
      const results = userList.filter(user =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(userList);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search for users..."
        value={query}
        onChangeText={text => handleSearch(text)}
      />
      <ScrollView>
        {searchResults.map(user => (
          <TouchableOpacity
            key={user.id}
            style={styles.userCard}
            onPress={() => navigation.navigate('DetailsScreen', { user })}
          >
            <View style={styles.userInfo}>
              <Icon name="user-circle" size={35} color="#00aced" />
              <Text style={styles.userName}>{user.name}</Text>
            </View>
            <Text style={styles.userEmail}>{user.email}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#edf2f7',
  },
  input: {
    height: 45,
    borderColor: '#b0b0b0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  userCard: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginLeft: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});
