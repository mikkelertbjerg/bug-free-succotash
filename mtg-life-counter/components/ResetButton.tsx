import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
    onPress?: () => void;
}
const ResetButton = ({ onPress }: Props) => {
    return (
        <MaterialCommunityIcons name="undo-variant" size={24} color="white" onPress={onPress} />
    );
}

export default ResetButton;