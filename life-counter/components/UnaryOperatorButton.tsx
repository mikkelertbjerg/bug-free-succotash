import useTheme from '@/hooks/useTheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, TouchableHighlight, View } from 'react-native';

type Props = {
    unaryOperator: 'plus' | 'minus';
    afinity: Theme;
    onPress: () => void;
}
const UnaryOperatorButton = ({ unaryOperator, afinity, onPress }: Props) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const theme = useTheme(afinity);
    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressedBackground,  // Background highlight effect
            ]}>

            <View style={pressed ? styles.highlight : null} />

            <View>
                <AntDesign
                    name={pressed ?
                        (unaryOperator === 'plus' ? 'pluscircle' : 'minuscircle') :
                        (unaryOperator === 'plus' ? 'pluscircleo' : 'minuscircleo')}
                    size={40}
                    color={theme.styles.color}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Ensures the highlight doesn't spill outside
    },
    pressedBackground: {
        backgroundColor: 'rgba(66, 66, 66, 0.1)', // Same as TouchableHighlight underlayColor
    },
    highlight: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(66, 66, 66, 0.1)',
    },
});

export default UnaryOperatorButton;