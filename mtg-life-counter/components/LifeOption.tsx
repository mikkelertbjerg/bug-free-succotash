import { OptionsContext } from "@/context/OptionsContext";
import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    life: number;
    onPress: () => void;
}

const LifeOption = ({ life, onPress }: Props) => {
    const options = useContext(OptionsContext);

    const onChange = () => {
        options.life = life;
        onPress();
    }

    return (
        <Pressable onPress={onChange}>
            <Text style={styles.text}>
                {life}
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