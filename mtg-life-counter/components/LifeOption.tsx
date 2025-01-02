import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    option: number;
    onPress: (life: number) => void;
}

const LifeOption = ({ option, onPress }: Props) => {
    return (
        <Pressable onPress={() => onPress(option)}>
            <Text style={styles.text}>
                {option}
            </Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 24,
    }
});

export default LifeOption;