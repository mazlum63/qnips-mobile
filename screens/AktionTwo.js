import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import products from '../assets/qniptsData.json'
import ProductRow from '../assets/components/ProductRow'

const AkitonTwo = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(products);
    }, [data])

    return (
        <View style={styles.productContainer}>
            <View style={styles.productCols}>
                <View style={styles.productRows}>
                    <Text style={styles.productDays}>Montag</Text>
                </View>
                <View style={styles.productRows}>
                    <Text style={styles.productDays}>Dienstag</Text>
                </View>
                <View style={styles.productRows}>
                    <Text style={styles.productDays}>Mittwoch</Text>
                </View>
                <View style={styles.productRows}>
                    <Text style={styles.productDays}>Donnerstag</Text>
                </View>
                <View style={styles.productRows}>
                    <Text style={styles.productDays}>Freitag</Text>
                </View>
            </View>
            <View style={styles.productCols}>

                {data && (
                    data.Rows[1].Days.map((item, i) => (
                        <ProductRow key={i} id={item.ProductIds[0].ProductId} />
                    ))
                )}
            </View>
        </View>
    )
}

export default AkitonTwo

const styles = StyleSheet.create({
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    productCols: {
        width: 200,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productRows: {
        backgroundColor: '#000',
        width: '100%',
        height: 120,
        padding: 10,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productDays: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 20,
    }
})