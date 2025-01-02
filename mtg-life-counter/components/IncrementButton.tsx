import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    onPress: () => void;
}
const IncrementButton = ({ onPress }: Props) => {
    return (
        <AntDesign name="pluscircleo" size={40} color="black" onPress={onPress} />
    )
}

export default IncrementButton;