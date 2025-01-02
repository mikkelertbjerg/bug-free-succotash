import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Pressable } from 'react-native';

type Props = {
    onPress?: () => void;
}

const LifeButton = ({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <FontAwesome6 name="heart" size={24} color="white" />
        </Pressable>
    );
}

export default LifeButton;