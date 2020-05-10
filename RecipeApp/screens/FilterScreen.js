import React,{useState, useCallback,useEffect} from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals'

const SwitchScreen=props=>{
    return(
        <View style={styles.filterContainer}>
                <Text style={styles.title}>{props.label}</Text>
                <Switch
                trackColor={{true:'purple'}}
                thumbColor={'purple'} 
                value={props.value} 
                onValueChange={props.onChange}/>
            </View>
    )
}

const FilterScreen = props=>{

    const {navigation}=props;
    const [isGlutenFree, setIsGlutenFree]=useState(false);
    const [isVegan, setIsVegan]=useState(false);
    const [isVegetarian, setIsVegetarian]=useState(false);
    const [isLactoseFree, setIsLactoseFree]=useState(false);
    const dispatch = useDispatch();

    const saveFilter=useCallback(()=>{
        appliedFilter={
            glutenFree: isGlutenFree,
            vegan:isVegan,
            vegetarian:isVegetarian,
            lactoseFree: isLactoseFree,
        
    }
    dispatch(setFilters(appliedFilter))
},[isGlutenFree,isVegan,isVegetarian,isLactoseFree, dispatch]);

useEffect(()=>{
    navigation.setParams({save:saveFilter});
},[saveFilter])
    return(
        
        <View style={styles.screen}>
            <View style={styles.header}>
        <TouchableOpacity>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              iconName="menu"
              iconSize={30}
              color="black"
              onPress={() => props.navigation.toggleDrawer()}
            />
          </HeaderButtons>
        </TouchableOpacity>
        <TouchableOpacity>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              iconName="save"
              iconSize={30}
              color="black"
              onPress={saveFilter}
            />
          </HeaderButtons>
        </TouchableOpacity>
      </View>
      
            <Text style={styles.text}>
                Available Filters/ Restriction
            </Text>
            <SwitchScreen label="Gluten-Free" value={isGlutenFree} onChange={newVal=>setIsGlutenFree(newVal)} />
            <SwitchScreen label="Is Vegan" value={isVegan} onChange={newVal=>setIsVegan(newVal)} />
            <SwitchScreen label="Is Vegetarian" value={isVegetarian} onChange={newVal=>setIsVegetarian(newVal)} />
            <SwitchScreen label="Lactose Free" value={isLactoseFree} onChange={newVal=>setIsLactoseFree(newVal)} />

        </View>
    );
}


const styles=StyleSheet.create({
    screens:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        padding:30
    },
    filterContainer:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        marginVertical: 25
    },
    title:{
        fontSize:20,
        padding:20,
        fontWeight:'900'
    },
    header: {
        padding: 5,
        width: '100%',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 20
      },
});

export default FilterScreen;