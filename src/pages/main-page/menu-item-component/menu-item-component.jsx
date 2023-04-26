import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { loadProducers } from '../../../services/loading-data';
import StarsComponent from '../../../global-component/stars-component';

const distaceInMeters = (distance) => {
    return `${distance}m`;
}

function DataProducers({ name, image, distance, stars }) {
    const [ selected, setSelected ] = useState(false);

    const textDistance = distaceInMeters(distance);

    return <TouchableOpacity style={styles.producersBox} onPress={() => setSelected(!selected)}>
        <Image source={image} accessibilityLabel={name} style={styles.producerLogo} />
        <View style={styles.producerInformation}>
            <View>
                <Text style={styles.producerName}>{name}</Text>
                <StarsComponent amount={stars} editable={selected} big={selected}/>
            </View>
            <Text style={styles.producerDistance}>{textDistance}</Text>
        </View>
    </TouchableOpacity>
}

export default function Producers() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');

    useEffect(() => {
        const call = loadProducers();
        setTitle(call.title);
        setList(call.list);
    }, [])

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <DataProducers {...item} />}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => <Text style={styles.titleText}>{title}</Text>} />
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 23,
        lineHeight: 32,
        marginTop: 16,
        marginHorizontal: 16,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        color: '#464646',
    },

    producersBox: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 6,
        flexDirection: 'row',

        // Android
        elevation: 4,

        // IOS
        shadowColor: '#000',
        shadowOffSet: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    producerInformation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    producerName: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
    },

    producerDistance: {
        fontSize: 12,
        lineHeight: 19,
        fontFamily: 'Montserrat_400Regular',
    },

    producerLogo: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
})