import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/home/LoginPage';
import RecipesPage from './pages/recipes/RecipesPage';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Recipes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Routes: React.FC = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Recipes" component={RecipesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Routes;

