import React, { Component } from "react";
import {
    AppRegistry,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
    StyleSheet,
    Text,
    View
} from "react-native";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#16a085",
            elevation: null
        },
        header: null
    };
    async onLoginPress() {
        const { username, password } = this.state;
        console.log(username);
        console.log(password);
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("password", password);
        console.log(this.props.navigation)
        this.props.navigation.navigate("Contact", { identifiant: this.state.username });
    }
    render() {
        return (
            <View
                style={styles.container}>
                <Text style={styles.subtext}>Bienvenue</Text>
                <View style={styles.window}>
                    <TextInput
                        style={{ borderBottomColor: "#000000", borderBottomWidth: 1, height: 56 }}
                        placeholder="Identifiant"
                        placeholderTextColor="#000000"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}
                    />
                </View>
                <View style={styles.window}>
                    <TextInput
                        style={{ borderBottomColor: "#000000", borderBottomWidth: 1, height: 56 }}
                        placeholder="Mot de passe"
                        placeholderTextColor="#000000"
                        returnKeyType="go"
                        secureTextEntry
                        ref={input => (this.passwordInput = input)}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => { this.onLoginPress() }}
                >
                    <Text style={styles.buttonText}>SE CONNECTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#F9FAFF",
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 70,
        paddingTop: 180
    },
    subtext: {
        color: "#000000",
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: "left",
        marginBottom: 50,
    },
    keyboard: {
    },
    buttonContainer: {
        marginTop: 50,
        backgroundColor: "#000000",
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
    },
    button: {
        backgroundColor: "#27ae60",
        paddingVertical: 15
    },
    window: {
        marginBottom: 15
    }
});

AppRegistry.registerComponent("Login", () => Login);