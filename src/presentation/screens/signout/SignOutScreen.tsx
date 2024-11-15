import { View } from 'react-native';
import { useAuthStore } from '../../store/AuthStore';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export const SignOutScreen = () => {
  const login = useAuthStore( ( state ) => state.login );

  return (
    <View style={ styles.container }>
     
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
  },

  title: {
    flex: 1,
    textAlign: 'center'
  }
} );