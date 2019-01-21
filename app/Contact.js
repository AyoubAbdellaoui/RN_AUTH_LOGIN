import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator,
    StatusBar
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Communications from 'react-native-communications';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            isDataLoaded: false,
            name: {
                first: "",
                last: ""
            },
            phone: "",
            email: "",
            picture: "",
        };
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#F9FAFF",
            elevation: null
        },
        headerLeft: null
    };

    async componentDidMount() {
        try {
            let randomuserApiCall = await fetch('https://randomuser.me/api');
            let randomuser = await randomuserApiCall.json();
            randomuser && this.setState({ isDataLoaded: true })
            this.setState({
                picture: randomuser.results[0].picture.large,
                name: randomuser.results[0].name,
                phone: randomuser.results[0].phone,
                email: randomuser.results[0].email,
            })
            console.log('fetched Data', randomuser)
            // this.setState({ data: randomuser.results, isloading: false });
        } catch (err) {
            console.log(":::::::: Error fetching data ::::::::", err);
        }
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    };


    render() {
        return (
            <>
                {this.state.isDataLoaded ?
                    <>
                        <View style={styles.container}>
                            <Text style={styles.subtext}>Bonjour {this.props.navigation.getParam('identifiant')}</Text>
                            <View style={{ width: 40, borderBottomColor: "#000000", borderBottomWidth: 2, marginVertical: 30 }}></View>
                            <View style={{ width: 150, height: 150, borderRadius: 75, alignItems: 'center', justifyContent: 'center', marginBottom: 50 }}>
                                <Image style={{ width: 150, height: 150, borderRadius: 75, resizeMode: 'cover' }} source={this.state.picture !== "" ? { uri: this.state.picture } : require('./placeholder.png')} />
                            </View>
                            <Text style={[styles.subtext, { fontWeight: 'bold' }]}>{this.state.name.last + ' & ' + this.state.name.first}</Text>
                            <Text style={[styles.subtext, { fontSize: 18 }]}>{this.state.phone}</Text>
                            <Text style={[styles.subtext, { fontSize: 14 }]}>{this.state.email}</Text>
                        </View >
                        <View style={styles.bottomContainer}>
                            <TouchableOpacity style={styles.iconContainer} onPress={this._signOutAsync}>
                                <Feather name={"log-out"} size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, { backgroundColor: "#000000" }]} onPress={() => Communications.phonecall(this.state.phone, true)}>
                                <Feather name={"phone-call"} size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#000000" />
                        <StatusBar barStyle="dark-content" backgroundColor="#F9FAFF" />
                    </View>}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtext: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: "center",
    },
    bottomContainer: {
        backgroundColor: "#F9FAFF",
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: "#C90612"
    }
});

AppRegistry.registerComponent("Contact", () => Contact);