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

export default useAfinity;