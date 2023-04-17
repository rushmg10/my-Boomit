import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens

import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registeration';
import HomeScreen from './screens/Home';




const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


 


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/