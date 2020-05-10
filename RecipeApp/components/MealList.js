import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import MealItem from '../components/MealItem'
import {useSelector} from 'react-redux';

const MealList = props=>{
    const favoriteMeal=useSelector(state=>state.meals.favMeal);

    const renderMealItems=itemData=>{
        const isFavorite=favoriteMeal.some(meal=>meal.id===itemData.item.id)
        return(
            <MealItem title={itemData.item.title} 
                    duration={itemData.item.duration}
                    affordability={itemData.item.affordability}
                    complexity={itemData.item.complexity}
                    image={itemData.item.imageUrl}
                    onSelectMeal={()=>props.navigation.navigate('MealDetailScreen',{
                        mealID:itemData.item.id,
                        headerTitle:itemData.item.title,
                        isFav:isFavorite
                    })
                }
                    />
        )
    }
    
    return(
        <View style={styles.list}>
        <FlatList data={props.listData} renderItem={renderMealItems} style={{width:'100%'}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    list:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"

    }
});

export default MealList;
