import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ebebeb',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: '#000000',
        opacity: 0.8,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 20,
        height: 20,
        backgroundColor: '#ff3de8',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 10,
    },

    itemText: {
        maxWidth: '75%',
    },

    circular: {
        width: 14,
        height: 14,
        borderColor: '#47ceff',
        borderWidth: 2.5,
        borderRadius: 10,
    },
});

export default Task;