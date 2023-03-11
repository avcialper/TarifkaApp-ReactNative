import React from 'react'
import { Pressable, Image, Text, View } from 'react-native'
import styles from './MealCard.styles'

const MealCard = ({ meal, onSelect }) => {
    return (
        <Pressable style={styles.container} onPress={onSelect} >
            <Image
                source={{ uri: meal.strMealThumb }}
                style={styles.image}
            />
            <View style={styles.titleView} >
                <Text style={styles.title} numberOfLines={1} >{meal.strMeal}</Text>
            </View>
        </Pressable>
    )
}

export default MealCard