import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    onSetStartingLife: (life: number) => void;
    setVisible: (show: boolean) => void;
    visible: boolean;
}

const LifeModal = ({ onSetStartingLife, setVisible, visible }: Props) => {
    const [input, setInput] = useState<string>('');

    const onPress = () => {
        let n = Number(input);
        if (typeof (n) !== "number") {
            return; // TODO Error message
        }

        setVisible(false);
        onSetStartingLife(n);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Starting life</Text>
                    <TextInput style={styles.life} autoFocus={true} placeholder="0" placeholderTextColor={'white'} keyboardType="number-pad" onChangeText={setInput} />
                    <View style={styles.buttons}>
                        <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setVisible(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.okButton]} onPress={onPress}>
                            <Text style={styles.okText}>Ok</Text>
                        </Pressable>
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
        backgroundColor: '#424242',
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
        flex: 1,
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
    button: {
        minWidth: 72,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
    },
    okButton: {
        backgroundColor: 'white',
        borderColor: '#424242',
    },
    okText: {
        textAlign: 'center',
        color: '#424242',
    },
    cancelButton: {
        backgroundColor: '#424242',
        borderColor: 'white'
    },
    cancelText: {
        textAlign: 'center',
        color: 'white',
    }
});

export default LifeModal;