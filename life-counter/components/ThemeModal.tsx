import { Modal, StyleSheet, Text, View } from "react-native";
import ThemeButton from "./ThemeButton";
import CancelButton from "./CancelButton";
import { Player } from "@/types/player";
import { themes, useThemeContext } from "@/context/ThemeContext";

type Props = {
    visible: boolean;
    setVisibility: (visibile: boolean) => void;
    player: Player;
}

const ThemeModal = ({ visible, setVisibility, player }: Props) => {
    const { setPlayerTheme } = useThemeContext();

    const onSetTheme = (theme: keyof typeof themes) => {
        setPlayerTheme(player, theme); // ✅ Update theme in context
        setVisibility(false);
    };

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
                        <ThemeButton style={styles.button} source={themes.forest.source} onPress={() => onSetTheme('forest')} />
                        <ThemeButton style={styles.button} source={themes.island.source} onPress={() => onSetTheme('island')} />
                        <ThemeButton style={styles.button} source={themes.mountain.source} onPress={() => onSetTheme('mountain')} />

                    </View>
                    <View style={styles.buttons}>
                        <ThemeButton style={styles.button} source={themes.plains.source} onPress={() => onSetTheme('plains')} />
                        <ThemeButton style={styles.button} source={themes.swamp.source} onPress={() => onSetTheme('swamp')} />
                        <ThemeButton style={styles.button} source={themes.tradeFederation.source} onPress={() => onSetTheme('tradeFederation')} />
                    </View>
                    <View style={styles.buttons}>
                        <ThemeButton style={styles.button} source={themes.blobs.source} onPress={() => onSetTheme('blobs')} />
                        <ThemeButton style={styles.button} source={themes.starEmpire.source} onPress={() => onSetTheme('starEmpire')} />
                        <ThemeButton style={styles.button} source={themes.machineCult.source} onPress={() => onSetTheme('machineCult')} />
                    </View>
                    <CancelButton onPress={() => setVisibility(false)} />
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

export default ThemeModal;