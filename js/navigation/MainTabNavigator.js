import { createBottomTabNavigator } from 'react-navigation';
import MainStack from './stacks/MainStack';
import MarketStack from './stacks/MarketStack';

const menus = () => {
  return {
    MainStack,
    MarketStack,
  };
};

export default createBottomTabNavigator(menus());
