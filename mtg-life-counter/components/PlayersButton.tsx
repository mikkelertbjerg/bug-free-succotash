import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onPress?: () => void;
}

const PlayersButton = ({ onPress }: Props) => {
    return (
        <Ionicons name="people-sharp" size={24} color="white" onPress={onPress} />
    );
}

export default PlayersButton;