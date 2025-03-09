import { PropsWithChildren, useContext } from "react";
import { StyleSheet, View } from "react-native";

import useTheme from "@/hooks/useTheme";

type Props = PropsWithChildren<{
    theme: Theme,
    orientation: Orientation,
}>;

const orientations = {
    north: { transform: [{ rotate: '0deg' }] },
    east: { transform: [{ rotate: '90deg' }] },
    south: { transform: [{ rotate: '180deg' }] },
    west: { transform: [{ rotate: '270deg' }] },
}

const PlayerBoard = ({ theme, orientation, children }: Props) => {
    const { themeStyles } = useTheme(theme);

    return (
        <View style={[styles.board, themeStyles, orientations[orientation]]}>
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