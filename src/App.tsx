import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottonTabNavigator } from './presentation/routes/BottomTabNavigator';
import { useAuthStore } from './presentation/store/AuthStore';
import { useEffect } from 'react';
import { LoadingScreen } from './presentation/screens/loading/LoadingScreen';
import { useAuth } from './presentation/hooks/UseAuth';

export const App = () => {

  const { isLoading } = useAuth();

  if ( isLoading ) return <LoadingScreen />;

  return (
    // provider que provê a navegação entre as screens e outras coisitas mas
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};