import useAfinity from '@/hooks/useAfinity';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

type Props = {
    unaryOperator: 'plus' | 'minus';
    afinity: Afinity;
    onPress: () => void;
}
const UnaryOperatorButton = ({ unaryOperator, afinity, onPress }: Props) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const theme = useAfinity(afinity);
    return (
        <TouchableHighlight
            activeOpacity={1}
            underlayColor='rgba(66, 66, 66, 0.1)'
            style={[styles.button]}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)} onPress={onPress}>
            <View>
                {pressed &&
                    <AntDesign
                        name={unaryOperator === 'plus' ? 'pluscircle' : 'minuscircle'}
                        size={40}
                        color={theme.color}
                    />
                }
                {!pressed && <AntDesign
                    name={unaryOperator === 'plus' ? 'pluscircleo' : 'minuscircleo'}
                    size={40}
                    color={theme.color}
                />
                }
            </View>
        </TouchableHighlight>
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