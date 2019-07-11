import React, {Component} from 'react';
import {Text,View } from 'react-native';
import { Icon ,Button} from 'react-native-elements';

export default class Settings extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        const {containerStyle}=Style;
        return (
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",width:"100%",marginTop: 20}}>
            <Icon

                size={30}
                    onPress={() => this.props.navigation.openDrawer()}
                    containerStyle={{ padding: 10,alignSelf:'flex-start' }}
                    name="reorder"
                ></Icon>
            <Text style={{fontSize:20,fontWeight:"bold",marginLeft: 15,marginTop:8}}>Settings</Text>

        </View>

        <Button
             containerStyle={{marginTop:20,alignSelf:"center"}}
              onPress={()=>this.props.navigation.navigate("Profile")}
              title="Go to Profile "
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