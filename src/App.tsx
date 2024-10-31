import {NavigationContainer} from '@react-navigation/native'

import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottonTabNavigator } from './presentation/routes/BottomTabNavigator';

export const App = () => {
  return (
    // provider que provê a navegação entre as screens e outras coisitas mas
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
  
    </NavigationContainer>
  )
}