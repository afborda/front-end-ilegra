import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageMovie: {
    width: '100%',
    height: 200,
  },
  listMovie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 150,
  },
  movieItem: {
    marginHorizontal: 10,
  },
  nameMovie: {
    maxWidth: 150,
    textAlign: 'center',
  },
  backgroundItem: {
    width: 160,
    height: 250,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
  },
});
