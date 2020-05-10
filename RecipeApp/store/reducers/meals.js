import {MEALS} from '../../data/data';
import {TOGGLE_FAVOURITE, SET_FILTERS} from '../actions/meals'
const initialState={
    meal: MEALS,
    filterMeal: MEALS,
    favMeal: []
}

const MealReducer = (state=initialState, action)=>{
    switch (action.type) {
      case TOGGLE_FAVOURITE:
      const existingIndex=state.favMeal.findIndex(meal=>meal.id===action.mealId);
      if(existingIndex >= 0){
        const updatefavMeal=[...state.favMeal]
        updatefavMeal.splice(existingIndex,1)
          return{...state,favMeal:updatefavMeal}
      }
      else{
        const meal =state.meal.find(meal=>meal.id===action.mealId);
        return{...state, favMeal:state.favMeal.concat(meal)}
      }
      case SET_FILTERS:
        const appliedFilters=action.filters;
        const updatedFilterMeal=state.meal.filter(meal=>{
          if(appliedFilters.glutenFree && !meal.isGlutenFree){
            return false;
          }
          if(appliedFilters.vegan && !meal.isVegan){
            return false;
          }
          if(appliedFilters.vegetarian && !meal.isVegetarian){
            return false;
          }
          if(appliedFilters.lactoseFree && !meal.isLactoseFree){
            return false;
          }

          return true;
        });
        return{...state, filterMeal:updatedFilterMeal}
      default:
        return state;
    }
}


export default MealReducer;