import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './NavigationService';

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                screenProps={{t: 'this is t'}}
            />
        );
    }
}
