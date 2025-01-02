import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    onPress: () => void;
}
const DecrementButton = ({ onPress }: Props) => {
    return (
        <AntDesign name="minuscircleo" size={40} color="black" onPress={onPress} />
    )
}

export default DecrementButton;