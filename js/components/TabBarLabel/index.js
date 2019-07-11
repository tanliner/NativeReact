import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

const TabBarLabel = ({label, t, focused}) => (
    <Text style={{color: 'red'}} allowFontScaling={false}>
        {label}
    </Text>
);

TabBarLabel.propTypes = {
    focused: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default TabBarLabel;
