import { StyleSheet } from "react-native";

const themeSources = {
    forest: require('@/assets/images/s_mtg_forest.png'),
    island: require('@/assets/images/s_mtg_island.png'),
    mountain: require('@/assets/images/s_mtg_mountain.png'),
    plains: require('@/assets/images/s_mtg_plains.png'),
    swamp: require('@/assets/images/s_mtg_swamp.png'),
    tradeFederation: require('@/assets/images/trade_federation.svg'),
    starEmpire: require('@/assets/images/star_empire.svg'),
    machineCult: require('@/assets/images/machine_cult.svg'),
    blobs: require('@/assets/images/blob.svg'),
}

const themeStyles = StyleSheet.create({
    forest: { color: '#000e03', backgroundColor: '#9cd4b0' },
    plains: { color: '#1b170d', backgroundColor: '#fffbd6' },
    island: { color: '#01121c', backgroundColor: '#abe1fa' },
    swamp: { color: '#0b0406', backgroundColor: '#ccc3c0' },
    mountain: { color: '#1a0000', backgroundColor: '#f9ac90' },
    tradeFederation: { color: '#35468f', backgroundColor: '#000' },
    blobs: { color: '#8dc654', backgroundColor: '#000' },
    starEmpire: { color: '#fbec1d', backgroundColor: '#000' },
    machineCult: { color: '#d72d32', backgroundColor: '#000' }
});

const useTheme = (theme: Theme) => ({
    themeStyles: themeStyles[theme] || themeStyles.swamp,
    themeSources: themeSources[theme] || themeSources.swamp,
});

export default useTheme;