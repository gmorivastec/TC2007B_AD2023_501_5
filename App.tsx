// como inicializar un proyecto de expo con typescript  
// npx create-expo-app -t expo-template-blank-typescript
// como correrlo:
// npx expo start

// primera cosa que hay que hacer al clonar un repo con node
// npm install

// regla para toda su vida (o el tiempo que dure node)
// AGREGAR UN .GITIGNORE AL INICIAR

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EjemploClase } from './classes/EjemploClase';

// es necesario definir un componente default en el módulo principal
// export - exponer miembro del módulo al exterior
// default - miembro por default que se importa al importar módulo (luego vemos más!)

// COMPONENTES
// - elemento básico de construcción de UI en react native
// - pueden ser definidos de 2 maneras:
// -- funciones
// -- clases

// instanciable
// reutilizable 
// componentes están hechos a su vez de componentes más sencillos

export default function App() {

  // cuando creamos un componente por medio de función
  // necesitamos regresar UI como resultado
  return (
    
    // JSX - javascript xml
    // sintaxis similar a XML / HTML
    // la vamos a usar para definir UI 
    // (es simplemente otra manera de declarar objetos)
    <View style={styles.container}>
      <Text>Hola amiguitos!</Text>
      <EjemploClase nombre="Perrito" edad={5} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
