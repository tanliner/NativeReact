import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './NavigationService';

export default class App extends React.Component {

    render() {
        // get the launch options, key: images
        console.log('ltan/App', this.props.images);
        const args = this.props.images;
        console.log('ltan/App args0', args[0]);
        return (
            <AppNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                screenProps={{t: 'this is t', bundle: args[0]}}
            />
        );
    }
}
