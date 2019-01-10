import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./app/Login";
import Contact from "./app/Contact";

import { createAppContainer, createStackNavigator } from "react-navigation";


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
},
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});