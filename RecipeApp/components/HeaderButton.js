import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

const CustomHeaderButton = props=>{
    return <HeaderButton
    {...props} 
    IconComponent={Ionicons}    
    iconSize={props.iconSize}
    color={props.color}
    /> 
}

export default CustomHeaderButton;