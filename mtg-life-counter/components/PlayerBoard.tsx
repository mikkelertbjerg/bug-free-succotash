import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import PlayerControls from "./PlayerControls";

type Props = PropsWithChildren<{
    life: number,
    afinity: Afinity,
    orientation: Orientation,
}>;

const PlayerBoard = ({ life, afinity, orientation, children }: Props) => {
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

    const setAfinity = (afinity: Afinity): object => {
        switch (afinity) {
            case "forest":
                return styles.forest;
            case "plains":
                return styles.plains;
            case "island":
                return styles.island;
            case "swamp":
                return styles.swamp;
            case "mountain":
                return styles.mountain;
        }
    }

    return (
        <View style={[styles.board, setAfinity(afinity), setOrientation(orientation)]}>
            <PlayerControls life={life} afinity={afinity} />
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    forest: {
        color: 'white',
        backgroundColor: 'green'
    },
    plains: {
        color: 'black',
        backgroundColor: 'white',
    },
    island: {
        color: 'white',
        backgroundColor: 'blue',
    },
    swamp: {
        color: 'white',
        backgroundColor: 'black',
    },
    mountain: {
        color: 'white',
        backgroundColor: 'red',
    }
});

export default PlayerBoard;