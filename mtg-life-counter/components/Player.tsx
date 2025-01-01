import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Player = () => {
    const [life, setLife] = useState<number>(20);
    const [count, setCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<boolean>(false);
    const timeoutRef = useRef<any>();

    const onIncrementLife = () => {
        setLife(life + 1);
        setCount(count + 1);
        setShowCount(true);
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setShowCount(false);
            setCount(0);
        }, 2500);
    }

    const onDecrementLife = () => {
        setLife(life - 1);
        setCount(count - 1);
        setShowCount(true);
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setShowCount(false);
            setCount(0);
        }, 2500);
    }

    return (
        <>
            <View style={styles.ghost}>
                {showCount &&
                    <Text style={styles.count}>
                        {count > 0 ? "+" : ""} {count}
                    </Text>
                }
            </View>
            <View style={styles.controls}>
                <Pressable
                    onPress={onDecrementLife}
                >
                    <Text style={styles.unary}>-</Text>
                </Pressable>
                <Text style={styles.life}>{life}</Text>
                <Pressable
                    onPress={onIncrementLife}
                >
                    <Text style={styles.unary}>+</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    ghost: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    count: {
        fontSize: 40,
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
    },
    life: {
        fontSize: 64,
        color: 'black',
        padding: 16,
    },
    unary: {
        fontSize: 64,
        color: 'black',
        padding: 16,
    }
});

export default Player;