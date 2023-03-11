import React, { useState, useEffect } from 'react'
import { API_DETAIL_URL } from '@env'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import useFetch from '../../hooks/useEffect'
import styles from './Detail.styles'
import DetailCard from '../../components/DetailCard'

const Detail = ({ route }) => {

    // Gets the selected meal id
    const { idMeal } = route.params
    // Gets meal detail with meal id
    const { data, loading, error } = useFetch(API_DETAIL_URL + idMeal)

    // Animations
    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <DetailCard item={data.meals[0]} />
    )
}

export default Detail