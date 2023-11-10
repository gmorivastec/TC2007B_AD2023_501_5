import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from 'react-native';

export default function RequestFunction(props : any) {

    const[data, setData] = useState([]);

    // podemos declarar una función dentro de otra (!!!)

    async function request() {
        var response = await fetch(props.uri);
        var json = await response.json();

        console.log(json);

        setData(json);
    }
    
    // necesitamos utilizar algo para ejecutar exclusivamente 1 vez
    // existe un hook llamado useEffect
    // sirve para registrar lógica que se va a correr post-render 
    // podemos agregar triggers / prerequisitos
    useEffect(() => {
        // la lógica que va a correr
        request();
    }, []); 
    

    return (
        <View>
            {
                data.length > 0 ?
                    <Text>Request done</Text>
                :
                    <ActivityIndicator size="large" />
            }
        </View>
    );
}