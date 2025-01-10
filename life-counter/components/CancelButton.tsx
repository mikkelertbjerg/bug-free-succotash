import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    onPress: () => void;
}
const CancelButton = ({ onPress }: Props) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Cancel</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        minHeight: 40,
        minWidth: 72,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#424242',
        borderColor: '#fff'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
    }
});

export default CancelButton;