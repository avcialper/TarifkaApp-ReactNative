import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import ButtonCard from '../Button'
import styles from './DetailCard.styles'

const DetailCard = ({ item }) => {

    return (
        <ScrollView style={styles.container} >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.body}>
                <View>
                    {   // If the meal have a tag this component is visible
                        item.strTags !== null && <Text style={styles.tags} >#{item.strTags}</Text>
                    }
                    <View style={styles.title} >
                        <Text style={styles.category} >{item.strCategory}</Text>
                        <Text style={styles.area} >{item.strArea} Food</Text>
                    </View>
                    <Text style={styles.name} >{item.strMeal}</Text>
                    <Text style={styles.instructions} >{item.strInstructions}</Text>
                </View>
                <View style={styles.buttons}>
                    <ButtonCard title='Watch on Youtube' url={item.strYoutube} />
                    <ButtonCard title='Read on Google' url={item.strSource} />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailCard