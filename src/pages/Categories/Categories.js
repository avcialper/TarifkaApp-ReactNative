import React from 'react'
import { FlatList } from 'react-native'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useEffect'
import { API_CATEGORIES_URL } from '@env'
import CategoryCard from '../../components/CategoryCard'
import styles from './Categories.styles'

const Categories = ({navigation}) => {

    // To fetch data
    const { data, loading, error } = useFetch(API_CATEGORIES_URL)

    // Animations
    if (loading) return <Loading />
    if (error) return <Error />

    // Go to meals page
    const handleCategorySelect = (strCategory, strCategoryDescription) => navigation.navigate('MealsPage', {strCategory, strCategoryDescription})

    // To render a category card
    const renderCategory = ({ item }) => 
        <CategoryCard 
            categories={item} 
            onSelect={() => handleCategorySelect(item.strCategory, item.strCategoryDescription)}
        />

    return (
        <FlatList
            data={data.categories}
            renderItem={renderCategory}
            keyExtractor={item => item.idCategory}
            style={styles.container}
        />
    )
}

export default Categories