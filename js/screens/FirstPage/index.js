import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import PropTypes from 'prop-types';

import Navigator from '../../NavigationService';

import styles from './style'

export default class FirstPage extends Component {

    static propTypes = {
        bundle: PropTypes.string.isRequired
    };


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('ltan/FirstPage args', this.props.bundle)
    }

    onPress = () => {
        console.log('ltan/FirstPage');
        // 测试同一个Activity里启动界面，结果：Succeed
        Navigator.navigate('Market')
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>
                    <Text style={{color: '#f00', fontSize: 16, height: 100}}>{'First, click to SecPage'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
