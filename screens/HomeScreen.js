import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../assets/qniptsData.json'

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(products);
    }, [data])

    return (
        <View style={styles.rows}>
            <TouchableHighlight
                onPress={() => navigation.navigate("AktionOne")}
                style={styles.row}>
                <Text style={styles.rowText}>{data && data.Rows[0].Name}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate("AktionTwo")}
                style={styles.row}>
                <Text style={styles.rowText}>{data && data.Rows[1].Name}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate("Salatbar")}
                style={styles.row}>
                <Text style={styles.rowText}>{data && data.Rows[2].Name}</Text>
            </TouchableHighlight>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    rows: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    row: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: 200,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    rowText: {
        fontSize: 30,
        fontWeight: 600,
        color: '#fff'
    }
})