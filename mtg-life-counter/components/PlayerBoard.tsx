import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type Props = PropsWithChildren<{
    afinity: Afinity,
    orientation: Orientation,
}>;

const PlayerBoard = ({ afinity, orientation, children }: Props) => {
    return (
            <View style={orientation === 'east' ? styles.east :
                orientation === 'south' ? styles.south :
                    orientation === 'west' ? styles.west : {}
            }>
                <View style={afinity === "forest" ? styles.forest :
                    afinity === 'island' ? styles.island :
                        afinity === 'mountain' ? styles.mountain :
                            afinity === "plains" ? styles.plains : styles.swamp}>
                    {children}
                </View>
            </View>
    )

}

const styles = StyleSheet.create({
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