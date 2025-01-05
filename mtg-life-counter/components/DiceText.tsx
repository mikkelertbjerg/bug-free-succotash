import { StyleSheet, Text } from "react-native";

type Props = {
    text: string;
    afinity: Afinity;
}

const DiceText = ({ text, afinity }: Props) => {
    return (
        <Text style={[styles.text, afinity === 'plains' ? styles.dark : styles.light]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 88,
        textAlign: 'center'
    },
    light: {
        color: 'white',
    },
    dark: {
        color: '#616161'
    }
});

export default DiceText;