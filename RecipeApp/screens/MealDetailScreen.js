import React,{useEffect,useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/actions/meals';

const ListItem=props=>{
    return(
    <View style={styles.listItem}>
        <Text style={styles.text}>
            {props.children}
        </Text>
    </View>
    )}
const MealDetailScreen = props=>{
    const availableMeals=useSelector(state=>state.meals.meal)
    const {mealID} = props.route.params;
    const selectedMeal=availableMeals.find(meal=>meal.id === mealID)
    const currentMealIsFav=useSelector(state=>state.meals.favMeal.some(meal=>meal.id===mealID))
   
    const dispatch =useDispatch();

  const toggleFavouriteHandler=useCallback(()=>{
    dispatch(toggleFavourite(mealID))
  },[dispatch,mealID])

  useEffect(()=>{
    props.navigation.setParams({toggleFav:toggleFavouriteHandler});
  },[toggleFavouriteHandler])

  useEffect(()=>{
      props.navigation.setParams({isFav:currentMealIsFav})
  },[currentMealIsFav])
    // const dispatch=useDispatch();

    // const toggleHandler=useCallback(()=>{
    //     dispatch(toggleFavorite(selectedMeal.id))
    // },[dispatch, selectedMeal.id])
    // useEffect(()=>{
    //     props.navigation.setParams({toggleFav:toggleHandler})
    // },[toggleHandler])
    // const dispatch = useDispatch();
    // const toggleFavouriteHandler = () => {
    //   dispatch(toggleFavourite(selectedMeal.id));
    // };

    // const currMealFav = useSelector(State =>
    //     State.meals.favouriteMeals.some(meal => meal.id === selectedMeal.id),
    //   );
    

    // useEffect(() => {
    //     props.navigation.setParams({
    //       toggle: toggleFavouriteHandler,
    //     });
    //   }, [selectedMeal]);
    
    //   useEffect(() => {
    //     props.navigation.setParams({
    //       isFav: currMealFav,
    //     });
    //   }, [currMealFav]);

    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.detail}>
            <Text style={{fontWeight:'bold', fontSize:15, color:'green'}}>{selectedMeal.duration}mins</Text>
            <Text style={{fontWeight:'bold', fontSize:15, color:'green'}}>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text style={{fontWeight:'bold', fontSize:15, color:'green'}}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.ingredients}>INGREDIENTS</Text>
                {selectedMeal.ingredients.map(ingredient=>(
                <ListItem key={ingredient} style={styles.text}>{ingredient}</ListItem>
                ))}
                            
            <Text style={styles.steps}>STEPS</Text>
                {selectedMeal.steps.map(step=>(
                <ListItem key={step} style={styles.text}>{step}</ListItem>
                ))}
            
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:175,
        marginTop:5
    },
    detail:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding: 15,
        backgroundColor:'lightgray'
    },
    ingredients:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    steps:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'black',
        padding:10
    },
    text:{
        fontSize:20,
        padding: 5
    }
})

export default MealDetailScreen;