import useTheme from "@/hooks/useTheme";
import { Image, Pressable, StyleSheet, TouchableHighlight } from "react-native";

type Props = {
    afinity: Theme;
    onPress: () => void;
    style?: {};
}
const AfinityButton = ({ afinity, onPress, style }: Props) => {
    const theme = useTheme(afinity);

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