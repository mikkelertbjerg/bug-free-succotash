import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
    onReset: () => void;
    onRollDice: () => void;
    rolling: boolean;
    onPlayersButtonPressed?: () => void;
    onShowLifeOptions: () => void;
}
const BoardOptions = ({ onReset, onRollDice, rolling, onPlayersButtonPressed, onShowLifeOptions }: Props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onReset}>
                <Ionicons name="reload" style={styles.text} />
            </Pressable>
            <Pressable style={styles.button} onPress={onRollDice}>
                {rolling ?
                    <Ionicons name="dice" style={styles.text} /> :
                    <Ionicons name="dice-outline" style={styles.text} />
                }
            </Pressable>
            {false &&
                <Pressable style={styles.button}>
                    <Ionicons name="people-sharp" style={styles.text} />
                </Pressable>
            }
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