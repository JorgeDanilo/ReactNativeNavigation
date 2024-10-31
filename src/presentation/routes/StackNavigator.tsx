import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { globalStyles } from '../theme/theme';
import { Text, Touchable, TouchableOpacity } from 'react-native';
import { ProductScreen } from '../screens/products/ProductScreen';


export type RootStackParams = {
  Home: undefined,
  Product: { id: number, name: string},
  Products: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={({navigation}) => ({
      headerShown: true,
      headerStyle: globalStyles.header,
      headerTitleAlign:'center',
      // headerTitle: () => <Text style={ globalStyles.headerTitle }>Navigation</Text>
    })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ ProductScreen }/>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

