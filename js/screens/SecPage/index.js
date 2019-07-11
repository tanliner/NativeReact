import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style'
import Navigator from "../../NavigationService";

export default class SecPage extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        console.log('ltan/SecPage');
        Navigator.navigate('Main')
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>
                    <Text style={{color: '#f00', fontSize: 20, height: 100}}>{'SecPage, click to FirstPage'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
