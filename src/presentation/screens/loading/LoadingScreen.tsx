import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={ styles.container }>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5d5'
  }
} );