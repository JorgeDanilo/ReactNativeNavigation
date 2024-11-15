import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { globalStyles } from '../theme/theme';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SignIn } from '../screens/signin/SignIn';
import { SignOutScreen } from '../screens/signout/SignOutScreen';
import { useAuth } from '../hooks/UseAuth';
import { useEffect } from 'react';
import { LoadingScreen } from '../screens/loading/LoadingScreen';


export type RootStackParams = {
  SignIn: undefined;
  SignOutScreen: undefined;
  Home: undefined,
  Product: { id: number, name: string; },
  Products: undefined,
  Settings: undefined,
};

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {

  const { isLoggedIn, isInitializing, initializeAuth } = useAuth();

  useEffect( () => {
    initializeAuth();
  }, [ initializeAuth ] );

  if ( isInitializing ) return <LoadingScreen />;

  return (
    <Stack.Navigator>
      { isLoggedIn ? (
        <Stack.Group screenOptions={ ( { navigation } ) => ( {
          headerShown: true,
          headerStyle: globalStyles.header,
          headerTitleAlign: 'center',
          // headerTitle: () => <Text style={ globalStyles.headerTitle }>Navigation</Text>
        } ) }>
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Products" component={ ProductsScreen } />
          <Stack.Screen name="Product" component={ ProductScreen } />
          <Stack.Screen name="Settings" component={ SettingsScreen } />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={ ( { navigation } ) => ( {
          headerShown: true,
          headerStyle: globalStyles.header,
          headerTitleAlign: 'center',
          // headerTitle: () => <Text style={ globalStyles.headerTitle }>Navigation</Text>
        } ) }>
          <Stack.Screen name="SignIn" component={ SignIn } />
          <Stack.Screen name="SignOutScreen" component={ SignOutScreen } />
        </Stack.Group>
      ) }

    </Stack.Navigator>
  );
};

