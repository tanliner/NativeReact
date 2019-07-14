import { createBottomTabNavigator } from 'react-navigation';
import FirstStack from './stacks/FirstStack';
import SecStack from './stacks/SecStack';

const menus = () => {
  return {
    FirstStack,
    SecStack,
  };
};

export default createBottomTabNavigator(menus());
