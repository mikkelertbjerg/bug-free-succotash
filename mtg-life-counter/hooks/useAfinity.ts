import { StyleSheet } from "react-native";

const useAfinity = (afinity: Afinity): { color: string, backgroundColor: string } => {
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
        backgroundColor: '##f9ac90',
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