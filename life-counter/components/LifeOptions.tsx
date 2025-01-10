import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import React from "react";
import LifeModal from "./LifeModal";

type Props = {
    onClose: () => void;
    onSetStartingLife: (life: number) => void;
};

const LifeOptions = ({ onClose, onSetStartingLife }: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const onPress = (life: number) => {
        onSetStartingLife(life);
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
            <Pressable style={styles.button} onPress={() => setShow(true)}>
                <Ionicons name="ellipsis-horizontal" style={styles.text} />
            </Pressable>
            <LifeModal
                onSetStartingLife={onPress}
                setVisible={setShow}
                visible={show}
            />
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