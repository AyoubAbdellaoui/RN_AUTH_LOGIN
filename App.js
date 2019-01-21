import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AsyncStorage,
  ActivityIndicator,
  View,
  StatusBar
} from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Login from "./app/Login";
import Contact from "./app/Contact";
import AuthLoading from "./app/AuthLoadingScreen"


// const AppStack = createStackNavigator({ Contact: Contact });
// const AuthStack = createStackNavigator({ Login: Login });


class App extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F9FAFF",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F9FAFF" />
        <AppContainer />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: {
      title: "AuthLoading"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Contact: {
    screen: Contact,
    navigationOptionsNoHeader: {
      title: "Contact"
    }
  }
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Contact: Contact,
    Login: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});