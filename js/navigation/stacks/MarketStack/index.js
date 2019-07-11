import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import transitionConfig from '../../transitionConfig';
import { gestureConfig } from '../../gestureConfig';
import navigationOptions from '../../navigationOptions';
import TabBarLabel from '../../../components/TabBarLabel';
import TabBarIcon from '../../../components/TabBarIcon';
import { ICONS } from '../../../assets/images';

import Market from '../../../screens/SecPage';


const MarketStack = createStackNavigator(
  {
    Market,
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

MarketStack.navigationOptions = ({ navigation }) => navigationOptions(
  'MARKET',
  navigation,
  TabBarLabel,
  MarketTabBarIcon,
  () => {
    if (!navigation.isFocused()) {
    }
    return true;
  }
);

export default MarketStack;
