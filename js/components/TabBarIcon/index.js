import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import styles from './style';


export default class TabBarIcon extends React.Component {
  static propTypes = {
    defaultSource: PropTypes.number.isRequired,
    activeSource: PropTypes.number.isRequired,
    focused: PropTypes.bool,
    showRedDot: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  };

  static defaultProps = {
    focused: false,
    showRedDot: false,
    style: {},
  };

  render() {
    const { showRedDot, focused, defaultSource, activeSource, style } = this.props;
    const source = focused ? activeSource : defaultSource;
    if (showRedDot) {
      return false;
    }

    return <Image style={[styles.img, style]} source={source} />;
  }
}
