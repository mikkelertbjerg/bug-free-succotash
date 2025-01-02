import { StyleSheet, View } from "react-native";
import DiceButton from "./DiceButton";
import ResetButton from "./ResetButton";
import PlayersButton from "./PlayersButton";
import LifeButton from "./LifeButton";

type Props = {
    onResetButtonPressed?: () => void;
    onDiceButtonPressed?: () => void;
    onPlayersButtonPressed?: () => void;
    onLifeButtonPressed?: () => void;
}
const PlayerOptions = ({ onResetButtonPressed, onDiceButtonPressed, onPlayersButtonPressed, onLifeButtonPressed }: Props) => {
    return (
        <View style={styles.container}>
            <ResetButton onPress={onResetButtonPressed} />
            <DiceButton onPress={onDiceButtonPressed} />
            <PlayersButton onPress={onPlayersButtonPressed} />
            <LifeButton onPress={onLifeButtonPressed} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 56,
        backgroundColor: '#141414',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default PlayerOptions;