import { View, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    
    navigation.setOptions({
      title: params.name
    })
  }, [])
  

  return (
   <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 15 }}>Product Screen</Text>

      <Text style={{ 
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
       }}>
        {  params.id } - { params.name }
      </Text>
    </View>
  )
}