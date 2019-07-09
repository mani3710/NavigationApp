import React, {Component} from 'react';
import {Text,View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Settings extends Component {
    
    render() {
        const {containerStyle}=Style;
        return (
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",width:"100%",marginTop: 20}}>
            <Icon
                onPress={() => this.props.navigation.goBack()}
                containerStyle={{ padding: 10,alignSelf:'flex-start' }}
                name="arrow-back"
            ></Icon>
            <Text style={{fontSize:20,fontWeight:"bold",marginLeft: 15,marginTop:8}}>Settings</Text>

        </View>
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