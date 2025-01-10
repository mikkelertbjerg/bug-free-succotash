import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    onPress: () => void;
}
const OkButton = ({ onPress }: Props) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.okText}>Ok</Text>
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
        borderColor: '#424242',
        backgroundColor: '#fff',

    },
    okText: {
        textAlign: 'center',
        color: '#424242',
    },
})

export default OkButton;