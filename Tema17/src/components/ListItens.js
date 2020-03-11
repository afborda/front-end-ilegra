import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';
import getMovies from '../services/GetMovies';
import LoadList from './LoadList';

const ListItens = () => {
  const [listMovies, setListMovies] = useState([]);

  const loadData = async () => {
    const getListMovies = await getMovies();
    setListMovies(getListMovies.data.tv_shows);
    console.log('Teste', listMovies);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Text>Abner Fonseca Home</Text>
      <LoadList data={listMovies} />
    </View>
  );
};

export default ListItens;
