import React, {Component} from 'react';
import {Text,View } from 'react-native';
import {Button} from 'react-native-elements';


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
               <Button
             containerStyle={{marginTop:20,alignSelf:"center"}}
              onPress={()=>this.props.navigation.navigate("Story")}
              title="Go to Story"
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