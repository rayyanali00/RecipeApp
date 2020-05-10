import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';


const CategoryGridTile = props => {
return(
    <TouchableOpacity style={styles.grid} onPress={props.onSelect}>
            <View style={{...styles.view,...{backgroundColor:props.color}}}>
                <Text numberOfLines={2} style={styles.text}>{props.title}</Text>
            </View>
            </TouchableOpacity>
        )

}

const styles=StyleSheet.create({
       grid:{
           flex:1,
           height:150,
           margin: 20,
           overflow:'visible'

       },
       view:{
           flex:1,
           borderRadius:10,
           justifyContent:'flex-end',
           alignItems:'flex-end',
           padding:15
       },
       text:{
           fontSize:25,
           fontFamily:'DancingScript-VariableFont_wght',
       }
    
});

export default CategoryGridTile;