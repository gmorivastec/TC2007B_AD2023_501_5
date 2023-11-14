// como inicializar un proyecto de expo con typescript  
// npx create-expo-app -t expo-template-blank-typescript
// como correrlo:
// npx expo start

// primera cosa que hay que hacer al clonar un repo con node
// npm install

// regla para toda su vida (o el tiempo que dure node)
// AGREGAR UN .GITIGNORE AL INICIAR

import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { EjemploClase } from './classes/EjemploClase';
import Perrin, { DoggyRow } from './classes/DoggyComponent';
import RequestClass from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main"
          component={Main}
        />
        <Stack.Screen 
          name="NavExample"
          component={NavExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
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

export function Main({navigation} : any) {

  // cuando creamos un componente por medio de función
  // necesitamos regresar UI como resultado
  return (
    
    // JSX - javascript xml
    // sintaxis similar a XML / HTML
    // la vamos a usar para definir UI 
    // (es simplemente otra manera de declarar objetos)
    <View style={styles.container}>
      <Text>Hola amiguitos!</Text>
      {/* 
      <EjemploClase nombre="Perrito" edad={5} />
      <Perrin nombre="Perrin" edad={2} />
      */}
      <FlatList 
        data={[
          {name: "perrito1", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/41644.jpg"},
          {name: "perrito2", uri: "https://www.dogtrickacademy.com/wp-content/uploads/2011/11/getting-a-puppy-feature.png"},
          {name: "perrito3", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/18683.jpg"},
        ]}
        renderItem={({item}) => {
          return <DoggyRow nombre={item.name} uri={item.uri}/>;
        }}
      />
      <Button 
        title="NAVEGACION"
        onPress={() => {
          navigation.navigate("NavExample", {datos: "AQUÍ VAN UNOS DATOS CHIDOS!"});
        }}
      />
      <RequestClass uri="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json"/>
      <RequestFunction uri="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json"/>
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

function NavExample({navigation, route} : any) {
  return (
    <View>
      <Text>Hola! {route?.params.datos}</Text>
    </View>
  );
}