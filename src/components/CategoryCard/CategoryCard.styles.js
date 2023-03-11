import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginVertical: 5,
        backgroundColor: '#6d120d',
        borderWidth: 1,
        borderRadius: 30,
    },
    image: {
        width: 120,
        height: 120,
        marginHorizontal: 10,
        resizeMode: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a6e3e9',
    }
})