import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { InputComponents } from '../components/InputComponents';
import { styles } from '../Theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FormDiv{
  dividendo: number;
  divisor: number;
}

export const Ejercicio = () => {

  const [formDiv, setFormDiv] = useState<FormDiv>({
    dividendo: 0,
    divisor: 0
  });

  const [resultado, setResultado] = useState<number>(0);

  const handleSetValues = (name: string, value: number) => {
    setFormDiv({ ...formDiv, [name]: value })
    console.log(name);
    console.log(value);
  }

  // Función para dividir
  const fundiv = ({dividendo, divisor}: FormDiv) => {
    if (dividendo === 0 && divisor === 0){
      Alert.alert(
        "Error",
        "INTEDERMINACIÓN"
      );
    }
    else if (dividendo === 0 || divisor === 0) {
      Alert.alert(
        "Error",
        "NO EXISTE LA DIVISIÓN PARA CERO"
      );
    }
    else {
      const resultado: number = dividendo / divisor
      setResultado(resultado);
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.textH2}>¡Ingresa los datos!</Text>
      <View style={styles.contenedorAll}>
        <InputComponents placeholder='Coloca el Dividendo' handleSetValues={handleSetValues} name='dividendo'/>
        <InputComponents placeholder='Coloca el Divisor' handleSetValues={handleSetValues} name='divisor'/>
        <TouchableOpacity style={styles.boton} onPress={() => fundiv(formDiv)}>
          <Text style={styles.textD}>Dividir</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textH3}>Resultado = {resultado}</Text>
    </View>
  )
}