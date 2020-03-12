import React, {useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import searchMovies from '../services/SearchMovies';
import {styles} from '../styles/SearchMoviesStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadList from './LoadList';
const SearchMovies = () => {
  const [movieName, setMovieName] = useState('');
  const [listMovie, setListMovie] = useState([]);

  const loadData = async () => {
    const getListMovies = await searchMovies(movieName);
    setListMovie(getListMovies.data.tv_shows);
  };

  return (
    <View>
      <Text style={styles.titlePage}>Busca Series</Text>
      <View style={styles.searchMoviesView}>
        <TouchableOpacity style={styles.buttonSearch} onPress={loadData}>
          <Icon name="search" size={25} color="#000" />
        </TouchableOpacity>
        <TextInput
          value={movieName}
          style={styles.inputText}
          placeholder="Buscar"
          onChangeText={movieName => setMovieName(movieName)}
        />
      </View>
      <LoadList data={listMovie} />
    </View>
  );
};

export default SearchMovies;
