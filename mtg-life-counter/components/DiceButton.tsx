import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onPress?: () => void;
}
const DiceButton = ({ onPress }: Props) => {

    return (
        <Ionicons name="dice-outline" size={24} color="white" onPress={onPress} />
    )
}

export default DiceButton;