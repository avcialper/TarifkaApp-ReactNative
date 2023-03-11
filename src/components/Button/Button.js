import React from 'react'
import {Pressable, Text, Linking} from 'react-native'
import styles from './Button.styles'

const ButtonCard = ({title, url}) => {
    return(
        <Pressable style={styles.container} onPress={() => Linking.openURL(url) } >
            <Text style={styles.title} >{title}</Text>
        </Pressable>
    )
}

export default ButtonCard