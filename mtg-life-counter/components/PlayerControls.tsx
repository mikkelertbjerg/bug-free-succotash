import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    life: number,
}

const PlayerControls = ({ life }: Props) => {
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
                <Text style={styles.count}>
                    {count > 0 ? "+" : ""} {count}
                </Text>
            }
            <View style={styles.controls}>
                <DecrementButton onPress={onDecrementLife} />
                <Text style={styles.life}>{_life}</Text>
                <IncrementButton onPress={onIncrementLife} />
            </View>
            <View style={styles.icon}>
                <Ionicons name="heart" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    controls: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    count: {
        fontSize: 40,
        flex: 1,
        alignItems: 'flex-end',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
    },
    life: {
        fontSize: 120,
        color: 'black',
    },
});

export default PlayerControls;