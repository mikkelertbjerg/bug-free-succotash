import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    unaryOperator: 'plus' | 'minus';
    afinity: Afinity;
    onPress: () => void;
}
const UnaryOperatorButton = ({ unaryOperator, afinity, onPress }: Props) => {
    return (
        <AntDesign 
        name={unaryOperator === 'plus' ? 'pluscircleo' : 'minuscircleo'} 
        size={40} 
        color={afinity === 'plains' ? 'black' : 'white'} 
        onPress={onPress} />
    );
};

export default UnaryOperatorButton;