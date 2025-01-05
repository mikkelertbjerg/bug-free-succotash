import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onClose: () => void;
    onSetDefaultLife: (life: number) => void;
};

const LifeOptions = ({ onClose, onSetDefaultLife }: Props) => {
    const onPress = (life: number) => {
        onSetDefaultLife(life);
        onClose();
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onClose}>
                <Ionicons name="close-outline" style={styles.text} />
            </Pressable>
            <Pressable style={styles.button} onPress={() => onPress(20)}>
                <Text style={styles.text}>
                    {20}
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => onPress(50)}>
                <Text style={styles.text}>
                    {50}
                </Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Ionicons name="ellipsis-horizontal" style={styles.text} />
            </Pressable>
        </View>
    );
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
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
    },
    button: {
        flex: 1,
    }
});

export default LifeOptions;