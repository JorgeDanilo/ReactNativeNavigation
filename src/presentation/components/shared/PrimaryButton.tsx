import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  label: string,
  onPress:() => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable 
    onPress={() => onPress() }
    style={ ({pressed}) => ({
      ...globalStyles.primaryButton,
      opacity: (pressed) ? 0.8 : 1
    })}>
      <Text style={globalStyles.buttonText}>{ label }</Text>
    </Pressable>
  )
}