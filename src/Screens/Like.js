import React, {Component} from 'react';
import {Text,View } from 'react-native';

export default class Like extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Like",
            
        };
    };
    
    render() {
        const {containerStyle}=Style;
        return (
           <View style={containerStyle} > 
              <Text>Like Screen</Text>

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