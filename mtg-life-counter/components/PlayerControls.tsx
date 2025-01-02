import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import UnaryOperatorButton from "./UnaryOperatorButton";

type Props = {
    afinity: Afinity;
    life: number;
}

const PlayerControls = ({ life, afinity }: Props) => {
    const [_life, setLife] = useState<number>(life);
    const [count, setCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<boolean>(false);
    const timeoutRef = useRef<any>();

    const onIncrementLife = () => {
        setLife(_life + 1);
        setCount(count + 1);
        setShowCount(true);
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setShowCount(false);
            setCount(0);
        }, 2500);
    }

    const onDecrementLife = () => {
        setLife(_life - 1);
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
            {showCount &&
                <Text style={[styles.count, afinity === 'plains' ? styles.blackCount : styles.whiteCount]}>
                    {count > 0 ? "+" : ""} {count}
                </Text>
            }
            <View style={styles.controls}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='minus' onPress={onDecrementLife} />
                <Text style={styles.life}>{_life}</Text>
                <UnaryOperatorButton afinity={afinity} unaryOperator='plus' onPress={onIncrementLife} />
            </View>
            <Ionicons name="heart" size={32} color={afinity === 'plains' ? 'black' : 'white'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        fontSize: 40,
    },
    whiteCount: {
        color: 'white',
    },
    blackCount: {
        color: 'black'
    },
    life: {
        fontSize: 100,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 8,
        textShadowOffset: { width: 2, height: 2 },
        paddingHorizontal: 40,
    },
});

export default PlayerControls;