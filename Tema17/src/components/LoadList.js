import React from 'react';

import {View, Text} from 'react-native';

const LoadList = ({data}) => {
  console.log(data);

  const validate = value => {
    return data !== [];
  };

  return (
    <View>
      <View>
        <Text>Lista de Filmes</Text>
        {validate ? (
          data.map(item => (
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          ))
        ) : (
          <Text>Abner</Text>
        )}
      </View>
    </View>
  );
};

export default LoadList;
