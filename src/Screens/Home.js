import React, { Component } from 'react';
import { Text, View ,FlatList,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import DummyData from '../DummyData';


export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        
        return (
            <View style={{ flex: 1 }}>
            <View style={{flexDirection:"row",width:"100%",marginTop: 20}}>
                <Icon

                size={30}
                    onPress={() => this.props.navigation.openDrawer()}
                    containerStyle={{ padding: 10,alignSelf:'flex-start' }}
                    name="reorder"
                ></Icon>
                <Text style={{fontSize:20,fontWeight:"bold",marginLeft: 15,marginTop:12}}>Home</Text>

            </View>

            <View
            style={{marginTop:15}}>
            <FlatList
            data={DummyData}
            renderItem={({item,index})=>{
                return(
                    <View style={{margin:10,width:"100%",}}>
                    <TouchableOpacity style={{flex:1,marginTop:10,padding:10}}
                    onPress={()=>this.props.navigation.navigate(item.name)}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>{item.name}</Text>
                    </TouchableOpacity>
                    </View>
                );
            }}
            >

            </FlatList>
            </View>

        </View>
        );
    }
}
const Style = {
    containerStyle: {
        justifyContent: "center",
        alignSelf: 'center',
        flex: 1
    }
}
