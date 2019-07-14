import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import transitionConfig from '../../transitionConfig';
import { gestureConfig } from '../../gestureConfig';
import navigationOptions from '../../navigationOptions';

import TabBarLabel from '../../../components/TabBarLabel';
import TabBarIcon from '../../../components/TabBarIcon';
import { ICONS } from '../../../assets/images';

import FirstPage from '../../../screens/FirstPage';

const FirstStack = createStackNavigator(
  {
    FirstPage,
  },
  {
    headerMode: 'none',
    transitionConfig,
    navigationOptions: gestureConfig,
    screenProps: { name: '' },
  }
);

const MainTabBarIcon = ({ focused }) => (
  <TabBarIcon
    showRedDot={true}
    focused={focused}
    defaultSource={ICONS.NAV_MAIN}
    activeSource={ICONS.NAV_MAIN_SELECTED}
    style={{ marginRight: 2 }}
  />
);

MainTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

FirstStack.navigationOptions = ({ navigation }) => navigationOptions(
  'FirstPage',
  navigation,
  TabBarLabel,
  MainTabBarIcon,
  () => {
    if (!navigation.isFocused()) {
    }
    return true;
  }
);

export default FirstStack;
