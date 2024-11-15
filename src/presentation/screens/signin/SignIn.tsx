import { View } from 'react-native';
import { useAuthStore } from '../../store/AuthStore';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useAuth } from '../../hooks/UseAuth';

export const SignIn = () => {

  const { login } = useAuth();

  return (
    <View style={ { margin: 20 } }>
      <PrimaryButton label='Sign In' onPress={ () => login( 'user', 'pass' ) } />
    </View>
  );
};