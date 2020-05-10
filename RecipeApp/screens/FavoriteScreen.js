import React from 'react'
import {View, Text , StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

const FavoriteScreen = props =>{
    const availableMeal=useSelector(state=>state.meals.favMeal)
    if (availableMeal.length===0){
        return(
        <View style={styles.content}>
            <Text style={styles.text}>
                No favorite meal is found. You can add by clicking the star button.
            </Text>
        </View>
        )};
    return<MealList listData={availableMeal} navigation={props.navigation} />
};

const styles=StyleSheet.create({
    content:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    text:{
        fontSize:20,
        paddingTop: 90,
        textAlign:"center"
    }
})

export default FavoriteScreen;