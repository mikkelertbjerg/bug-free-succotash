import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import UnaryOperatorButton from "./UnaryOperatorButton";
import useAfinity from "@/hooks/useAfinity";

type Props = {
    afinity: Afinity;
    currentLife: number;
    setCurrentLife: (life: number) => void;
}

const PlayerControls = ({ afinity, currentLife, setCurrentLife }: Props) => {
    const theme = useAfinity(afinity);
    const [count, setCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<boolean>(false);
    const timeoutRef = useRef<any>();

    const onIncrementLife = () => {
        setCurrentLife(currentLife + 1);
        setCount(count + 1);
        setShowCount(true);
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setShowCount(false);
            setCount(0);
        }, 2500);
    }

    const onDecrementLife = () => {
        setCurrentLife(currentLife - 1);
        setCount(count - 1);
        setShowCount(true);
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setShowCount(false);
            setCount(0);
        }, 2500);
    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='minus' onPress={onDecrementLife} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.count, { color: theme.color }, showCount ? { opacity: 1 } : { opacity: 0 }]}>
                    {count > 0 ? "+" : ""} {count}
                </Text>
                <Text style={styles.life}>{currentLife}</Text>
                <Ionicons name="heart" size={32} color={theme.color} />
            </View>
            <View style={styles.button}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='plus' onPress={onIncrementLife} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        elevation: 2,
    },
    button: {
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    count: {
        fontSize: 40,
    },
    life: {
        height: '50%',
        fontSize: 104,
        color: '#fff',
        textShadowRadius: 4,
        textShadowColor: '#000',
        textShadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 1,
        elevation: 2,
    },
});

export default PlayerControls;