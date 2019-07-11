'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Navigator from './js/NavigationService';
import App from './js';

class HelloWorld extends React.Component {

  // 测试跨Activity启动界面，结果 Failed
  goAnotherPage = () => {
    Navigator.navigate('Main')
  };

  render() {
    return (
        <TouchableOpacity onPress={this.goAnotherPage}>
          <View style={styles.container}>
            <Text style={styles.hello}>Hello, ----- d--- -d-d World</Text>
          </View>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 200,
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    padding: 50,
  },
});
// register two activity
AppRegistry.registerComponent('ThirdActivity', () => App, false);
AppRegistry.registerComponent('AnotherActivity', () => HelloWorld, false);
