import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/Home';
import SearchMovie from '../pages/Movies';

const MainNavigator = createBottomTabNavigator({
  Home,
  SearchMovie,
});

export default MainNavigator;
