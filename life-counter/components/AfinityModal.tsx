import { Modal, StyleSheet, Text, View } from "react-native";
import AfinityButton from "./AfinityButton";
import CancelButton from "./CancelButton";

type Props = {
    visible: boolean;
    setVisibility: (visibile: boolean) => void;
    setAfinity: (afinity: Theme) => void;
}

const AfinityModal = ({ visible, setVisibility, setAfinity }: Props) => {

    const onSetAfinity = (afinity: Theme) => {
        setAfinity(afinity);
        setVisibility(!visible);
    }

    const onClose = () => {
        setVisibility(!visible);
    }

    return (
        <Modal
            transparent={true}
            animationType='fade'
            visible={visible}
            onRequestClose={() => setVisibility(false)}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Themes</Text>
                    <View style={styles.buttons}>
                        <AfinityButton style={styles.button} afinity='forest' onPress={() => onSetAfinity('forest')} />
                        <AfinityButton style={styles.button} afinity='island' onPress={() => onSetAfinity('island')} />
                        <AfinityButton style={styles.button} afinity='mountain' onPress={() => onSetAfinity('mountain')} />

                    </View>
                    <View style={styles.buttons}>
                        <AfinityButton style={styles.button} afinity='plains' onPress={() => onSetAfinity('plains')} />
                        <AfinityButton style={styles.button} afinity='swamp' onPress={() => onSetAfinity('swamp')} />
                    </View>
                    <CancelButton onPress={onClose} />
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        width: '80%',
        backgroundColor: 'rgba(66, 66, 66, 1)',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    button: {
        padding: 16,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 8,
    },
    heading: {
        textAlign: 'left',
        color: 'white',
        fontSize: 40,
    },
})

export default AfinityModal;