import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 5,
        justifyContent: 'flex-end'
    },
    image:{
        width: Dimensions.get('screen').width - 22,
        height: 200,
        borderRadius: 20,
    },
    titleView: {
        position: 'absolute',
        width: Dimensions.get('screen').width - 22,
        backgroundColor: '#000000c0',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title: {
        color: '#a6e3e9',
        fontSize: 20,
        textAlign: 'right',
        margin: 7
    }
})