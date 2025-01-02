import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onPress?: () => void;
}
const ResetButton = ({ onPress }: Props) => {
    return (
        <Ionicons name="reload" size={24} color="white" onPress={onPress} />
    );
}

export default ResetButton;