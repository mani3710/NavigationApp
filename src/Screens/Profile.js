import React, {Component} from 'react';
import {Text,View } from 'react-native';

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Profile",
            
        };
    };
    
    render() {
        const {containerStyle}=Style;
        return (
           <View style={containerStyle} > 
              <Text>Profile Screen</Text>

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