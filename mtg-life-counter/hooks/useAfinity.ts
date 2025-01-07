import { StyleSheet } from "react-native";
const mtg_forest = require('@/assets/images/s_mtg_forest.png');
const mtg_island = require('@/assets/images/s_mtg_island.png');
const mtg_mountain = require('@/assets/images/s_mtg_mountain.png');
const mtg_plains = require('@/assets/images/s_mtg_plains.png');
const mtg_swamp = require('@/assets/images/s_mtg_swamp.png');

const useAfinity = (afinity: Afinity): { styles: { color: string, backgroundColor: string }, sources: any } => {
    return {
        styles: getStyles(afinity),
        sources: getSources(afinity),
    };
}

const getSources = (afinity: Afinity) => {
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

const getStyles = (afinity: Afinity) => {
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

const styles = StyleSheet.create({
    forest: {
        color: '#000e03',
        backgroundColor: '#9cd4b0',
    },
    plains: {
        color: '#1b170d',
        backgroundColor: '#fffbd6',
    },
    island: {
        color: '#01121c',
        backgroundColor: '#abe1fa',
    },
    swamp: {
        color: '#0b0406',
        backgroundColor: '#ccc3c0',
    },
    mountain: {
        color: '#1a0000',
        backgroundColor: '#f9ac90',
    },
    tradeFederation: {
        color: '#35468f',
        backgroundColor: '#000'
    },
    blobs: {
        color: '#8dc654',
        backgroundColor: '#000',
    },
    starEmpre: {
        color: '#fbec1d',
        backgroundColor: '#000',
    },
    machineCult: {
        color: '#d72d32',
        backgroundColor: '#000',
    }
});

export default useAfinity;