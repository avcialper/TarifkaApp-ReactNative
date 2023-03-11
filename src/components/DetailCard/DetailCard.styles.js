import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 250,
    },
    body: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category: {
        fontSize: 20,
        color: '#ff5570',
        fontStyle:'italic'
    },
    tags: {
        fontSize: 15,
        color: '#ff5570',
        fontStyle:'italic',
    },
    area: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e88b7e'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    instructions: {
        textAlign: 'justify'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})