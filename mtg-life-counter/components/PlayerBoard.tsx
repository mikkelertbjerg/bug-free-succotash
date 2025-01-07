import { PropsWithChildren, useContext } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
const mtg_forest = require('@/assets/images/mtg_forest.png');
const mtg_island = require('@/assets/images/mtg_island.png');
const mtg_mountain = require('@/assets/images/mtg_mountain.png');
const mtg_plains = require('@/assets/images/mtg_plains.png');
const mtg_swamp = require('@/assets/images/mtg_swamp.png');
import useAfinity from "@/hooks/useAfinity";

type Props = PropsWithChildren<{
    afinity: Afinity,
    orientation: Orientation,
}>;

const PlayerBoard = ({ afinity, orientation, children }: Props) => {
    const _theme = useAfinity(afinity);
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

    const setBackground = (afinity: Afinity) => {
        switch (afinity) {
            case "forest":
                return mtg_forest;
            case "island":
                return mtg_island;
            case "plains":
                return mtg_plains;
            case "swamp":
                return mtg_swamp;
            case "mountain":
                return mtg_mountain;
        }
    }

    return (
        <View style={[styles.board, _theme, setOrientation(orientation)]}>
            <ImageBackground
                source={setBackground(afinity)}
                resizeMode="center"
                style={styles.image}
            >
                {children}
            </ImageBackground >
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
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