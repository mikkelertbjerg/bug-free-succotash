import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

type Props = {
    unaryOperator: 'plus' | 'minus';
    afinity: Afinity;
    onPress: () => void;
}
const UnaryOperatorButton = ({ unaryOperator, afinity, onPress }: Props) => {
    const [pressed, setPressed] = useState<boolean>(false);

    return (
        <Pressable style={styles.button} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} onPress={onPress}>
            {pressed &&
                <AntDesign
                    name={unaryOperator === 'plus' ? 'pluscircle' : 'minuscircle'}
                    size={40}
                    color={afinity === 'plains' ? '#616161' : 'white'}
                />
            }
            {!pressed && <AntDesign
                name={unaryOperator === 'plus' ? 'pluscircleo' : 'minuscircleo'}
                size={40}
                color={afinity === 'plains' ? '#616161' : 'white'}
            />
            }
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default UnaryOperatorButton;