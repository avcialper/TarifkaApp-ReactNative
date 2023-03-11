import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Categories from './pages/Categories'
import Meals from './pages/Meals'
import Detail from './pages/Detail'

const Router = () => {

  const Stack = createNativeStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='CategoriesPage'
          component={Categories}
          options={{title: 'CATEGORIES', headerTitleAlign:'center', headerTintColor:'white', statusBarColor: '#6d120d', 
                  headerStyle:{backgroundColor: '#6d120d'}}}
        />
        <Stack.Screen 
          name='MealsPage'
          component={Meals}
          options={{title: 'MEALS', headerTitleAlign:'center', headerTintColor:'white', statusBarColor: '#6d120d',
                  headerStyle:{backgroundColor: '#6d120d'}}}
        />
        <Stack.Screen 
          name='DetailPage'
          component={Detail}
          options={{title: 'DETAIL', headerTitleAlign:'center', headerTintColor:'white', statusBarColor: '#6d120d',
                  headerStyle:{backgroundColor: '#6d120d'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router