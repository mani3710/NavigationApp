import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Logout extends Component {

    render() {
        const { containerStyle } = Style;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
                    <Icon

                        size={30}
                        onPress={() => this.props.navigation.openDrawer()}
                        containerStyle={{ padding: 10, alignSelf: 'flex-start' }}
                        name="reorder"
                    ></Icon>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 15, marginTop: 8 }}>Logout</Text>

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