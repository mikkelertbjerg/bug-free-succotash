import { StyleSheet, View } from "react-native";
import DiceButton from "./DiceButton";
import ResetButton from "./ResetButton";
import PlayersButton from "./PlayersButton";
import LifeButton from "./LifeButton";

type Props = {
    onReset?: () => void,
    onDiceRoll?: () => void,
    onPlayersChange?: () => void,
    onLifeChange?: () => void,
}
const PlayerOptions = ({ onReset, onDiceRoll, onPlayersChange, onLifeChange }: Props) => {
    return (
        <View style={styles.container}>
            <ResetButton onPress={onReset} />
            <DiceButton onPress={onDiceRoll} />
            <PlayersButton onPress={onPlayersChange} />
            <LifeButton onPress={onLifeChange} />
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