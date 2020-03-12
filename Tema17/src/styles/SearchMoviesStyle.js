import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchMoviesView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginHorizontal: 30,
    borderRadius: 8,
    margin: 20,
  },
  buttonSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 50,
    paddingHorizontal: 10,
  },

  inputText: {
    height: 40,
    borderColor: 'gray',
    width: '80%',
  },
  titlePage: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
