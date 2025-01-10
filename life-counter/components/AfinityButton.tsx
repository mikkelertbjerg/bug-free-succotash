import useAfinity from "@/hooks/useAfinity";
import { Image, Pressable, StyleSheet, TouchableHighlight } from "react-native";

type Props = {
    afinity: Afinity;
    onPress: () => void;
    style?: {};
}
const AfinityButton = ({ afinity, onPress, style }: Props) => {
    const theme = useAfinity(afinity);

    return (
        <Pressable
            style={style}
            onPress={onPress}>
            <Image
                style={{ height: 48, width: 48 }}
                resizeMode="contain"
                source={theme.sources} />
        </Pressable>);
}

export default AfinityButton;