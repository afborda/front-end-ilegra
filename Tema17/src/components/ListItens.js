import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';
import mostPopularMovies from '../services/MostPopularMovies';
import LoadList from './LoadList';
import {styles} from '../styles/ListItensStyles';

const ListItens = () => {
  const [listMovies, setListMovies] = useState([]);

  const loadData = async () => {
    const getListMovies = await mostPopularMovies();
    setListMovies(getListMovies.data.tv_shows);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Text style={styles.titlePage}>Populares</Text>
      <LoadList data={listMovies} />
    </View>
  );
};

export default ListItens;
