import React, {Component} from 'react';
import {Text,View } from 'react-native';

export default class Splash extends Component {
    componentWillMount(){
        setTimeout((()=>{
            this.props.navigation.navigate("LoginScreen");
        }),1500)
    }
    
    render() {
        const {containerStyle}=Style;
        return (
           <View style={containerStyle} > 
              <Text>Splash Screen</Text>

           </View> 
        );
    }
}
const Style={
    containerStyle:{
        justifyContent:"center",
        alignSelf: 'center',
        flex: 1
    }
}