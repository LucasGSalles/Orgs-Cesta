import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

import logo from '../../../assets/logo.png';
import Producers from './menu-item-component/menu-item-component';

export default function MainPage() {
    return (
        <SafeAreaView style={styles.mainPageBox}>
            <View style={styles.header}>
                <View>
                    <View style={styles.imageBox}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.textsBox}>
                        <Text style={styles.welcomeText}> Olá Lucas </Text>
                        <Text style={styles.subtitleText}> Encontre os melhores produtores </Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <Producers />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainPageBox: {
        width: "100%",
        backgroundColor: 'white',
        flex: 1,
        flexDirection: "column",
    },

    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: '#F6F6F6',
        padding: 16,
    },

    textsBox: {
        marginTop: 20,
        marginLeft: 5,
        justifyContent: "center",
    },

    subtitleText: {
        fontFamily: "Montserrat_400Regular",
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    welcomeText: {
        fontFamily: "Montserrat_700Bold",
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
    },

    body: {
        backgroundColor: "white",
        flex: 3,
        marginLeft: 25,
        marginRight: 25,
    },

    imageBox: {
        marginTop: 25,
        marginLeft: 8,
    },

    logo: {
        width: 70,
        height: 28,
    },
})