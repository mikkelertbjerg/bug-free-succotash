import { StyleSheet, View } from "react-native";
import DiceButton from "./DiceButton";
import ResetButton from "./ResetButton";
import PlayersButton from "./PlayersButton";
import LifeButton from "./LifeButton";

type Props = {
    onReset?: () => void;
    onDiceButtonPressed?: () => void;
    onPlayersButtonPressed?: () => void;
    onShowLifeOptions?: () => void;
}
const BoardOptions = ({ onReset, onDiceButtonPressed, onPlayersButtonPressed, onShowLifeOptions }: Props) => {
    return (
        <View style={styles.container}>
            <ResetButton onPress={onReset} />
            <DiceButton onPress={onDiceButtonPressed} />
            <PlayersButton onPress={onPlayersButtonPressed} />
            <LifeButton onPress={onShowLifeOptions} />
        </View>
    )
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
        justifyContent: 'space-around',
    }
})

export default BoardOptions;