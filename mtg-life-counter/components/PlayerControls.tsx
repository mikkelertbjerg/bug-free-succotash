import { useContext, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import UnaryOperatorButton from "./UnaryOperatorButton";
import useAfinity from "@/hooks/useAfinity";
import { OptionsContext } from "@/context/OptionsContext";

type Props = {
    afinity: Afinity;
}

const PlayerControls = ({ afinity }: Props) => {
    const _afinity = useAfinity(afinity);
    const options = useContext(OptionsContext);

    const [currentLife, setCurrentLife] = useState<number>(options.life);
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
                <Text style={showCount ? [styles.count, afinity === 'plains' ? { color: '#616161' } : { color: 'white' }] : [styles.count, { color: _afinity.backgroundColor }]}>
                    {count > 0 ? "+" : ""} {count}
                </Text>
                <Text style={styles.life}>{currentLife}</Text>
                <Ionicons name="heart" size={32} color={afinity === 'plains' ? '#616161' : 'white'} />
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
    },
    button: {
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        fontSize: 40,
    },
    life: {
        height: '50%',
        fontSize: 100,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 8,
        textShadowOffset: { width: 2, height: 2 },
    },
});

export default PlayerControls;