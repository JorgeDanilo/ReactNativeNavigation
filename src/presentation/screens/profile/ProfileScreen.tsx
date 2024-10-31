import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      flex:1,
      paddingHorizontal: 20,
      marginTop: top + 20,
    }}>
      <Text>ProfileScreen</Text>
    </View>
  );
};