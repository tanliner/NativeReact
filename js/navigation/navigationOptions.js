import React from 'react';

export default (label, navigation, TabBarLabel, TabBarIcon, tabBarOnPress) => ({
  tabBarLabel: props => <TabBarLabel {...props} label={label}/>,
  tabBarIcon: props => <TabBarIcon {...props}/>,
  tabBarVisible: true,
  tabBarOnPress: props => {
    if (tabBarOnPress) {
      props.defaultHandler();
    }
  },
});
