import { StyleSheet, View } from "react-native";
import LifeOption from "./LifeOption";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dispatch, SetStateAction } from "react";

type Props = {
    onClose?: () => void;
    onSetLife: (life: number) => void;
    onMore?: () => void;
};

const LifeOptions = ({ onClose, onSetLife, onMore }: Props) => {
    return (
        <View style={styles.container}>
            <Ionicons name="close-outline" size={24} color="white" onPress={onClose} />
            <LifeOption option={20} onPress={onSetLife} />
            <LifeOption option={50} onPress={onSetLife} />
            <Ionicons name="ellipsis-horizontal" size={24} color="white" onPress={onMore} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 56,
        backgroundColor: '#141414',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default LifeOptions;