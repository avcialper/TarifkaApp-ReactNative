import React from 'react'
import { FlatList, View, Text } from 'react-native'
import styles from './Meals.styles'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useEffect'
import { API_MEALS_URL } from '@env'
import MealCard from '../../components/MealCard'

const Meals = ({ route, navigation }) => {

    // Takes category name and description
    const { strCategory, strCategoryDescription } = route.params
    // Gets the category meals
    const {data, loading, error} = useFetch(API_MEALS_URL+strCategory)

    // Animations
    if(loading) return <Loading />
    if(error) return <Error />

    // Go to deatil page
    const handleMealSelect = (idMeal) => navigation.navigate('DetailPage',{idMeal})

    // To render a meal card
    const renderMeal = ({item}) => <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />

    return (
        <View style={styles.container} >
            <FlatList 
                data={data.meals}
                keyExtractor={item => item.idMeal}
                renderItem={renderMeal}
                ListHeaderComponent={
                    <Text style={styles.description} >CATEGORY DESCRIPTION{'\n'}{strCategoryDescription}</Text>
                }
            />
        </View>
    )
}

export default Meals