import { StyleSheet, View } from "react-native";
import LifeOption from "./LifeOption";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    onClose: () => void;
};

const LifeOptions = ({ onClose }: Props) => {

    return (
        <View style={styles.container}>
            <Ionicons name="close-outline" size={24} color="white" onPress={onClose} />
            <LifeOption onPress={onClose} life={20} />
            <LifeOption onPress={onClose} life={50} />
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
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