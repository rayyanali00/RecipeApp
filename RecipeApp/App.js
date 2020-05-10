import React from 'react'
import {View, Text, Modal,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryMealScreen from './screens/CategoryMealScreen';
import CategoryScreen from './screens/CategoryScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FilterScreen from './screens/FilterScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import color from './constants/color';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HeaderButton from './components/HeaderButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MealReducer from './store/reducers/meals';


const rootReducer=combineReducers({
  meals: MealReducer
})
const store = createStore(rootReducer)
const stack=createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


function DrawerTab(){
  return(
    <Provider store={store}>
<NavigationContainer>
  <Drawer.Navigator 
    drawerContentOptions={{
      activeBackgroundColor: 'black',
      inactiveBackgroundColor:'darkblue',
      itemStyle: {
        borderTopRightRadius: 100,
        justifyContent:'space-around'
      },
      labelStyle: {
        color: 'white',
        fontSize: 20,
      },
    }}
    drawerStyle={{
      height: 300,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      padding: 25,
    }}
  >
  <Drawer.Screen name="Meal" component={BottomTab} 
    options={{
      drawerIcon:()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Meal"
      iconName="restaurant"
      color="white"
      iconSize={30}
      />
  </HeaderButtons>
      )
    }}
  />
  <Drawer.Screen name="Filter" component={FilterScreen} options={{
    drawerIcon:()=>(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item
    title="filter"
    iconName="sort"
    color="white"
    iconSize={30}
    />
</HeaderButtons>
    )
  }}
  
  />
  </Drawer.Navigator>
</NavigationContainer>
</Provider>
  );
};
  

  

function BottomTab(){
  return(
    <Provider store={store}>
  <Tab.Navigator
    activeColor="white"
    barStyle={{backgroundColor:'#7f18a1', height:60}}
    shifting={true}
  >
    <Tab.Screen name="Home" component={App} options={{
      tabBarLabel:'Meal',
      tabBarIcon:tabInfo=>{
        return(
          <Icon name="room-service" size={25} color="white"/>
        )
      }
    }
    }
    
    />
    <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
      tabBarLabel:'Favorite',
      tabBarIcon:()=>{
        return(
          <Icon name="favorite" size={25} color="white"/>
        )
        
      },
      title: '',

    }
      
    }
    
    />
  </Tab.Navigator>
  </Provider>
)}

// function BottomTab(){
//   return(
//     <NavigationContainer>
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={App} />
//     <Tab.Screen name="FavoriteScreen" options={({})=>({
//       title:'HEader'
//     })} component={FavoriteScreen} />
//   </Tab.Navigator>
// </NavigationContainer>

// )}

function App({navigation}){
  return(
    <Provider store={store}>
  <stack.Navigator initialRouteName="Home">
    <stack.Screen name="Home"  component={CategoryScreen} options={{ 
      headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            iconSize={30}
            color="white"
            onPress={()=>{navigation.toggleDrawer()}}
          />
        </HeaderButtons>
      ),
      title:"Meal Categories",
      headerStyle:{
        backgroundColor:color.color2
      },
      headerTintColor: '#ffffff',
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize: 25,
        paddingLeft: 80
      }
    }} />
    <stack.Screen name="CategoryMealScreen" component={CategoryMealScreen} options={({route})=>({
headerTitle:route.params.headerTitle,
headerTitleAlign:'center',
headerStyle:{
  backgroundColor:color.primaryColor
},
headerTintColor: '#ffffff',
headerTitleStyle:{
  fontWeight:'bold',
  fontSize: 25
},

    })}
    />
    <stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ 
      title:"Favorite Meal"}} />

      
    <stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={({route})=>({
headerTitle:route.params.headerTitle,
headerRight: ()=>(
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Favorite"
      iconName="star"
      iconSize={30}
      color={route.params.isFav ? 'black' : 'white'}
      onPress={route.params.toggleFav}
    />
  </HeaderButtons>
),
headerTitleAlign:'center',
headerStyle:{
  backgroundColor:color.primaryColor
},
headerTintColor: '#ffffff',
headerTitleStyle:{
  fontWeight:'bold',
  fontSize: 20
}
    })}
    />
  </stack.Navigator>
  </Provider>
)}

export default DrawerTab;