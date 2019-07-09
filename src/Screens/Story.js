import React, {Component} from 'react';
import {Text,View } from 'react-native';

export default class Story extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Story",
            
        };
    };
    
    render() {
        const {containerStyle}=Style;
        return (
           <View style={containerStyle} > 
              <Text>Story Screen</Text>

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