import { PropsWithChildren, useContext } from "react";
import { StyleSheet, View } from "react-native";

import useAfinity from "@/hooks/useAfinity";

type Props = PropsWithChildren<{
    afinity: Afinity,
    orientation: Orientation,
}>;

const PlayerBoard = ({ afinity, orientation, children }: Props) => {
    const theme = useAfinity(afinity);
    const setOrientation = (orientation: Orientation): object => {
        switch (orientation) {
            case "north":
                return styles.north;
            case "east":
                return styles.east;
            case "south":
                return styles.south;
            case "west":
                return styles.west;
        }
    }

    return (
        <View style={[styles.board, theme.styles, setOrientation(orientation)]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        justifyContent: 'center',
    },
    north: {
    },
    east: {
        transform: [{ rotate: '90deg' }]
    },
    south: {
        transform: [{ rotate: '180deg' }]
    },
    west: {
        transform: [{ rotate: '270deg' }]
    },

});

export default PlayerBoard;