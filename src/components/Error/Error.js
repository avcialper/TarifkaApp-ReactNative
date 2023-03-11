import React from 'react'
import Lottie from 'lottie-react-native'
import { View, Text } from 'react-native'

const Error = () => {
    return <Lottie source={require('../../assets/error.json')} autoPlay loop style={{backgroundColor:'#6d120d' }} />
}

export default Error