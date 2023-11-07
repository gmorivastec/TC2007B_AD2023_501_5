import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

// export - si quiero que se pueda importar desde fuera 
// del módulo

// de manera generic puedo definir especificamente la estructura
// de los props (1) y del estado (2)
export class EjemploClase extends Component<{nombre: string, edad: number}, {cuenta: number, nombre: string}> {

    // vamos a escribir un componente en clase
    // para examinar los métodos del ciclo de vida

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // 1 - montaje
    // props - argumentos que recibimos del exterior 
    // y pueden ser utilizados para definir el estado interno
    constructor(props: any) {
        super(props);

        // como definir las variables de estado en la clase
        // (esto SÓLO se hace en el constructor)
        this.state = {cuenta: 0, nombre: this.props.nombre};
    }

    // indispensable en mi componente tener render 
    // (de hecho es el único método obligatorio)
    render() {
        return (
            <View>
                <Text>
                    Hola, me llamo {this.state.nombre} y tengo {this.props.edad} años! 
                </Text>
                <Text>
                    Cuenta actual: {this.state.cuenta}
                </Text>
                <Button 
                    title="Botoncito"
                    onPress={ () => {
                        // cómo actualizar el estado 
                        this.setState(
                            (state) => {
                                return {cuenta: state.cuenta + 1};
                            }
                        );
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    // UPDATE 
    componentDidUpdate(prevProps: Readonly<{ nombre: string; edad: number; }>, prevState: Readonly<{ cuenta: number; nombre: string; }>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");
    }

    // DESMONTAJE
    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }

    // POR ÚLTIMO
    // no es parte del ciclo de vida pero es util para cachar errores
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ERROR");
    }
}