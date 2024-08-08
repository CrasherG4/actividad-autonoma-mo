import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { IMG_FONDO } from '../common/constTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {};

export const Inicio = ({navigation}: Props) => {
  return (
    <View style={styles.contenedor}>
      <StatusBar/>
      <Image style={styles.fondoInicio} source={{uri: IMG_FONDO}}/>
      <View style={styles.contenedorPagina}>
        <Text style={styles.textTop}>Inicio</Text>
      </View>
      <View style={styles.contenedorInicio}>
        <Text style={styles.textH1}>Bienvenido</Text>
      </View>
      <View style={styles.contenedorAcceder}>
        <Text style={styles.text}>Para iniciar a la aplicación pulse el botón de aquí abajo.</Text>
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Ejercicio')}>
          <Text style={styles.textD}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
