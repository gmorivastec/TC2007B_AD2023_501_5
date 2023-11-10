// en este módulo vamos a definir un componente por medio de una función

import { useState } from "react";
import { Text, View, Button, Image, TextInput } from 'react-native';

// 1. los componentes de función son como si sólo tuvieramos el método
// "render"

// 2. las funciones no tienen ciclo de vida, vamos a usar hooks.

// 3. cómo trabajamos con props y estados?
// - props - argumentos
// - estados - hooks 

export default function Doggy(props:any) {

    // para trabajar con estado vamos a utilizar hooks

    // hook es un mecanismo que sirve para enganchar cierta lógica
    // con momentos del ciclo de vida de un componente
    const[isHappy, setIsHappy] = useState(false);
    const[count, setCount] = useState(0);
    const[testInput, setTestInput] = useState("");

    // operador ??
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

    // aquí va a haber más lógica!
    return(
        <View>
            <Text>WOOF. {props.nombre} {props.edad} I'm {isHappy? "HAPPY!": "SAD :("}</Text>
            <Text>input: {testInput}</Text>
            <Text>bark count: {count}</Text>
            <Button 
                title="Change happiness"
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title="WOOF."
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <TextInput 
                placeholder="TEXT INPUT TEST"
                onChangeText={ text => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}

export function DoggyRow(props: any) {

    return(
        <View>
            <Text>My name is {props.nombre}</Text>
            <Image 
                source={{uri: props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}