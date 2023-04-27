import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import products from '../qniptsData.json'

const ProductRow = ({ id }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(products)
    }, [data])
    return (
        data && <View style={styles.productRows}>
            <Text style={styles.productProperties}>{data.Products[id].Name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>{
                data.Products[id].AllergenIds.map((item, i) => (

                    <Text style={styles.productProperties} key={i}>{data.Allergens[item].Label}  </Text>
                ))}
            </View>
            <Text style={styles.productProperties}>{data.Products[id].Price.Betrag}€</Text>
        </View>
    )
}

export default ProductRow

const styles = StyleSheet.create({
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
    productProperties: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 10
    }
})