import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AktionOne from './screens/AkitonOne';
import AktionTwo from './screens/AktionTwo';
import Salatbar from './screens/Salatbar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AktionOne" component={AktionOne} />
        <Stack.Screen name="AktionTwo" component={AktionTwo} />
        <Stack.Screen name="Salatbar" component={Salatbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}