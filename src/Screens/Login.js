import React, {Component} from 'react';
import {Text,View } from 'react-native';
import {Button} from 'react-native-elements';

export default class Login extends Component {
    
    render() {
        const {containerStyle}=Style;
        return (
           <View style={containerStyle} > 
              <Button
              onPress={()=>this.props.navigation.navigate("DrawNav")}
              title="LOG IN"
              ></Button>

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