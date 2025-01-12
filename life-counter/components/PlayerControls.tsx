import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UnaryOperatorButton from "./UnaryOperatorButton";
import useAfinity from "@/hooks/useAfinity";
import AfinityButton from "./AfinityButton";
import AfinityModal from "./AfinityModal";

type Props = {
    afinity: Afinity;
    setAfinity: (afinity: Afinity) => void;
    life: number;
    setLife: (life: number) => void;
}

const PlayerControls = ({ afinity, setAfinity, life, setLife, }: Props) => {
    const afinityTheme = useAfinity(afinity);
    const [count, setCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

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
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='minus' onPress={onDecrementLife} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.count, { color: afinityTheme.styles.color }, showCount ? { opacity: 1 } : { opacity: 0 }]}>
                    {count > 0 ? "+" : ""} {count}
                </Text>
                <Text style={styles.life}>{life}</Text>
                <AfinityButton afinity={afinity} onPress={() => setShowModal(true)} />
                <AfinityModal visible={showModal} setVisibility={setShowModal} setAfinity={setAfinity} />
            </View>
            <View style={{ flex: 1 }}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='plus' onPress={onIncrementLife} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    count: {
        fontSize: 40,
    },
    life: {
        fontSize: 104,
        color: '#fff',
        textShadowRadius: 8,
        textShadowColor: '#000',
        textShadowOffset: {
            width: -1,
            height: -1,
        },
    },
});

export default PlayerControls;