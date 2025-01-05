import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onPress?: () => void;
}

const LifeButton = ({ onPress }: Props) => {
    return (
        <Ionicons name="heart-outline" size={24} color="white" onPress={onPress} />
    );
}

export default LifeButton;