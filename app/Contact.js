import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import Feather from "react-native-vector-icons/Feather"

export default class Contact extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#F9FAFF",
            elevation: null
        },
        headerLeft: null
    };
    render() {
        return (<>
            <View style={styles.container}>
                <Text style={styles.subtext}>Bonjour {this.props.navigation.getParam('identifiant')}</Text>
                <View style={{ width: 40, borderBottomColor: "#000000", borderBottomWidth: 2, marginVertical: 30 }}></View>
                <View style={{ width: 150, height: 150, borderRadius: 75, alignItems: 'center', justifyContent: 'center', marginBottom: 50 }}>
                    <Image style={{ width: 150, height: 150, borderRadius: 75, resizeMode: 'cover' }} source={{ uri: 'https://picsum.photos/200/300?image=0' }} />
                </View>
                <Text style={[styles.subtext, { fontWeight: 'bold' }]}>Nom Prenom</Text>
                <Text style={[styles.subtext, { fontSize: 18 }]}>+2124455666</Text>
                <Text style={[styles.subtext, { fontSize: 14 }]}>email@email.com</Text>
            </View >
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name={"log-out"} size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: "#000000" }]}>
                    <Feather name={"phone-call"} size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
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