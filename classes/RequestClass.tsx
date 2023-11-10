import { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class RequestClass extends Component<{uri: string}, {model: string}>{

    // vamos a declarar el método para hacer request
    // este va a ser asíncrono
    async request(uri : string) {

        var response = await fetch(uri);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);

        this.setState((state) => {
            return {model: json[1]['modelo']};
        });
    }

    constructor(props: any){
        super(props);

        this.request(this.props.uri);
        this.state = {model: ""};
    }

    render() {
        return(
            <View>
                <Text>HEY IM : {this.state.model}</Text>
            </View>
        );
    }
}