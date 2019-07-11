import { StyleSheet } from 'react-native';
import { COLOR } from '../style';

export default ({ focused }) =>
  StyleSheet.create({
    tabBarLabel: {
      color: focused ? COLOR.PRIMARILY : COLOR.FONT.FOURTH,
      fontSize: 12,
      alignSelf: 'center',
      marginBottom: 4,
    },
  });
