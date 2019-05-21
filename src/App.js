import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD8LtSVISHxzWhrigcXJgv5j-6oc0s-dTI',
            authDomain: 'auth-cbdb7.firebaseapp.com',
            databaseURL: 'https://auth-cbdb7.firebaseio.com',
            projectId: 'auth-cbdb7',
            storageBucket: 'auth-cbdb7.appspot.com',
            messagingSenderId: '211557195790',
            appId: '1:211557195790:web:f9b4fe9b0093893d'
          })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
