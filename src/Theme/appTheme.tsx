import { StyleSheet } from "react-native"
import { COLOR_PRYMARY } from "../common/constTheme"

export const styles = StyleSheet.create({
  contenedor: {
    flex:1,
    alignItems: 'center'
  },
  contenedorInicio:{
    marginTop: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  fondoInicio: {
    flex:1,
    position: 'absolute',
    top: 0,
    left:0,
    bottom: 0,
    right:0
  },
  contenedorPagina: {
    backgroundColor: 'gray',
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    right: 0
  },
  textTop:{
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10
  },
  textH1: {
    color: 'white',
    fontSize: 60,
    fontWeight: '800',
  },
  textH2: {
    color: COLOR_PRYMARY,
    fontSize: 40,
    fontWeight: '800',
    marginTop: 20,
    marginBottom: 20
  },
  textH3: {
    color: COLOR_PRYMARY,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  contenedorAcceder: {
    position: 'absolute',
    bottom: '10%',
    gap: 20
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400'
  },
  textD: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  },
  boton: {
    backgroundColor: COLOR_PRYMARY,
    borderRadius: 4,
    padding: 10
  },
  contenedorAll: {
    backgroundColor: 'White',
    marginLeft: 10,
    marginRight: 10,
    borderColor: COLOR_PRYMARY,
    borderWidth: 2,
    borderRadius:12,
    padding: 20
  },
  contenedorInput: {
    margin: 10,
  },
  inputNum: {
    backgroundColor: '#f1f4f5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  }
})