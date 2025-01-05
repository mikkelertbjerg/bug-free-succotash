import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
    onReset?: () => void;
    onDiceButtonPressed?: () => void;
    onPlayersButtonPressed?: () => void;
    onShowLifeOptions?: () => void;
}
const BoardOptions = ({ onReset, onDiceButtonPressed, onPlayersButtonPressed, onShowLifeOptions }: Props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onReset}>
                <Ionicons name="reload" style={styles.text} />
            </Pressable>
            <Pressable style={styles.button}>
                <Ionicons name="dice-outline" style={styles.text} />
            </Pressable>
            <Pressable style={styles.button}>
                <Ionicons name="people-sharp" style={styles.text} />
            </Pressable>
            <Pressable style={styles.button} onPress={onShowLifeOptions}>
                <Ionicons name="heart-outline" style={styles.text} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 56,
        backgroundColor: '#424242',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    }
})

export default BoardOptions;