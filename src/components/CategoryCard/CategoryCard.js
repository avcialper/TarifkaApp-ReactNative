import React from 'react'
import {Pressable, Text, Image} from 'react-native'
import styles from './CategoryCard.styles'

const CategoryCard = ({categories, onSelect}) => {
    return(
        <Pressable style={styles.container} onPress={onSelect} >
            <Image source={{uri: categories.strCategoryThumb}} style={styles.image} />
            <Text style={styles.title} >{categories.strCategory}</Text>
        </Pressable>
    )
}

export default CategoryCard