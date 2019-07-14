import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import transitionConfig from '../../transitionConfig';
import { gestureConfig } from '../../gestureConfig';
import navigationOptions from '../../navigationOptions';
import TabBarLabel from '../../../components/TabBarLabel';
import TabBarIcon from '../../../components/TabBarIcon';
import { ICONS } from '../../../assets/images';

import SecPage from '../../../screens/SecPage';

const SecStack = createStackNavigator(
  {
    SecPage,
  },
  {
    headerMode: 'none',
    transitionConfig,
    navigationOptions: gestureConfig,
  }
);

const MarketTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    defaultSource={ICONS.NAV_MARKET}
    activeSource={ICONS.NAV_MARKET_SELECTED}
  />
);

MarketTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

SecStack.navigationOptions = ({ navigation }) => navigationOptions(
  'SecPage',
  navigation,
  TabBarLabel,
  MarketTabBarIcon,
  () => {
    if (!navigation.isFocused()) {
    }
    return true;
  }
);

export default SecStack;
