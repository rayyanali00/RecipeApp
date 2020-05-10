import React from 'react'
import {useSelector} from 'react-redux';
import MealList from '../components/MealList'

const CategoryMealScreen = props =>{
const {categoryID} = props.route.params;
const availableMeals=useSelector(state=>state.meals.filterMeal)
const displayMeals= availableMeals.filter(
    meal=>meal.categoryIds.indexOf(categoryID)>=0
    ) 
    return <MealList listData={displayMeals} navigation={props.navigation} />
}





export default CategoryMealScreen;