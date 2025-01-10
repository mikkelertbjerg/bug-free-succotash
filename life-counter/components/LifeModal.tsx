import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CancelButton from "./CancelButton";
import OkButton from "./OkButton";

type Props = {
    onSetStartingLife: (life: number) => void;
    setVisible: (show: boolean) => void;
    visible: boolean;
}

const LifeModal = ({ onSetStartingLife, setVisible, visible }: Props) => {
    const [input, setInput] = useState<string>('');

    const onOk = () => {
        let n = Number(input);
        if (typeof (n) !== "number") {
            return; // TODO Error message
        }

        setVisible(!visible);
        onSetStartingLife(n);
    }

    const onClose = () => {
        setVisible(!visible);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Starting life</Text>
                    <TextInput style={styles.life} autoFocus={true} placeholder="0" placeholderTextColor={'white'} keyboardType="number-pad" onChangeText={setInput} />
                    <View style={styles.buttons}>
                        <CancelButton onPress={onClose} />
                        <OkButton onPress={onOk} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '85%',
        backgroundColor: 'rgba(66, 66, 66, 0.95)',
        borderRadius: 8,
        padding: 24,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    heading: {
        textAlign: 'left',
        color: 'white',
        fontSize: 40,
    },
    life: {
        marginVertical: 16,
        textAlign: 'center',
        color: 'white',
        fontSize: 120,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default LifeModal;