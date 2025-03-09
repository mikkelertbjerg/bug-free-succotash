import { Image, Pressable, StyleSheet, TouchableHighlight } from "react-native";

type Props = {
    source: any;
    onPress: () => void;
    style?: {};
}
const ThemeButton = ({ source, onPress, style }: Props) => {

    return (
        <Pressable
            style={style}
            onPress={onPress}>
            <Image
                style={{ height: 48, width: 48 }}
                resizeMode="contain"
                source={source} />
        </Pressable>);
}

export default ThemeButton;