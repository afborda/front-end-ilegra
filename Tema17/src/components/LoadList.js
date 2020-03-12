import React from 'react';

import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from '../styles/LoadListStyles';

const LoadList = ({data}) => {
  const validate = () => {
    return data !== [];
  };

  return (
    <View>
      <View>
        <ScrollView>
          <View style={styles.listMovie}>
            {validate ? (
              data.map(item => (
                <View key={item.id} style={styles.backgroundItem}>
                  <View style={styles.movieItem}>
                    <Text numberOfLines={2} style={styles.nameMovie}>
                      {item.name}
                    </Text>
                    <Image
                      style={styles.imageMovie}
                      source={{uri: item.image_thumbnail_path}}
                    />
                  </View>
                </View>
              ))
            ) : (
              <Text>Não Encontrado</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoadList;
