import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Ejercicio } from '../screens/Ejercicio';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Ejercicio" component={Ejercicio} />
    </Stack.Navigator>
  );
}