import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

import star from '../../assets/star.png';
import grayStar from '../../assets/graystar.png';

export default function StarsComponent({
    amount: previewsAmount,
    editable = false,
    big = false,
}) {
    const [ amount, setAmount ] = useState(previewsAmount);
    const styles = stylesFunction(big)

    const getImage = (index) => {
        if (index < amount) {
            return star;
        }
        return grayStar;
    }

    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <TouchableOpacity key={i} onPress={() => setAmount(i + 1)} disabled={!editable}>
                    <Image source={getImage(i)} style={styles.starImage} />
                </TouchableOpacity>
            );
        }

        return listStars;
    }

    return <View style={styles.star}>
        <RenderStars />
    </View>
}

const stylesFunction = (big) => StyleSheet.create({
    starImage: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
    },

    star: {
        flexDirection: 'row',
        marginRight: 2,
    },
}) 