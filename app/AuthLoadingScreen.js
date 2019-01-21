import React, { Component } from "react";
import {
    StyleSheet,
    AsyncStorage,
    ActivityIndicator,
    View,
    StatusBar
} from 'react-native';


export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'Contact' : 'Login');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000000" />
                <StatusBar barStyle="dark-content" backgroundColor="#F9FAFF" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});