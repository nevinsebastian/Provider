// Import necessary modules from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import AddActivityScreen from './components/AddActivityScreen';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Define your navigation stack
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Add LoginScreen or any other screens if needed */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddActivityScreen" component={AddActivityScreen} options={{ title: 'Add Activity' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
