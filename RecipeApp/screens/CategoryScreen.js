import React from 'react'
import {View, Text, StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryScreen = props=>{
    const renderGridItems=(itemData)=>{
        return(
        <CategoryGridTile title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=>{
            props.navigation.navigate('CategoryMealScreen',
        {
            categoryID: itemData.item.id,
            headerTitle: itemData.item.title,
        }       
    
        )
        }} />
        )}
    
    return(
            <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItems} />
        // <View style={styles.screen}>
        //     <Text style={styles.text}>
        //         CategoryScreen
        //     </Text>
        //     <Button style={styles.button} title="Go to Category Meal" onPress={()=>props.navigation.navigate('CategoryMealScreen')} />
        // </View>
    );
}


const styles=StyleSheet.create({
    screens:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
         
       },
       grid:{
           flex:1,
           height:150,
           margin: 20,

       },
       value:{
           fontSize:19
       }
});

export default CategoryScreen;