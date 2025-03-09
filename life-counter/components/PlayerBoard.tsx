import { PropsWithChildren, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Player } from "@/types/player";
import { useThemeContext } from "@/context/ThemeContext";

type Props = PropsWithChildren<{
    player: Player,
    orientation: Orientation,
}>;

const orientations = {
    north: { transform: [{ rotate: '0deg' }] },
    east: { transform: [{ rotate: '90deg' }] },
    south: { transform: [{ rotate: '180deg' }] },
    west: { transform: [{ rotate: '270deg' }] },
}

const PlayerBoard = ({ player, orientation, children }: Props) => {
    const { playerThemes } = useThemeContext(); // Get full theme data
    const theme = playerThemes[player]; // Get this player's full theme

    return (
        <View style={[styles.board, theme.styles, orientations[orientation]]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default PlayerBoard;