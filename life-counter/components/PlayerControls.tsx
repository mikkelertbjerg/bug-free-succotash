import { useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, useAnimatedValue, View } from "react-native";
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

    const opacityAnimation = useAnimatedValue(0);//useRef(new Animated.Value(0)).current;
    const translateYAnimation = useAnimatedValue(10); //useRef(new Animated.Value(10)).current;
    const isAnimating = useRef(false);

    const [showModal, setShowModal] = useState<boolean>(false);

    const timeoutRef = useRef<any>();

    const onCountChange = () => {
        if (!isAnimating.current) {
            // If no animations are running, play fade-in and travel-up animation

            isAnimating.current = true; // Mark animations as running
            Animated.parallel([
                Animated.timing(opacityAnimation, {
                    toValue: 1, // Fully visible
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(translateYAnimation, {
                    toValue: 0, // Move to the original position
                    duration: 250,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                // Start fade-out sequence after the initial animation completes
                startFadeOut();
            });
        } else {
            // If animations are running, reset and start fade-out directly
            opacityAnimation.stopAnimation();
            translateYAnimation.stopAnimation();
            opacityAnimation.setValue(1);
            translateYAnimation.setValue(0);
            startFadeOut();
        }
    }

    const startFadeOut = () => {
        // Start the fade-out sequence
        Animated.parallel([
            Animated.timing(opacityAnimation, {
                toValue: 0, // Fully invisible
                duration: 500,
                delay: 2000, // Wait 2 seconds before starting fade-out
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnimation, {
                toValue: 10, // Move down slightly
                duration: 500,
                delay: 2000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            // Check if opacity is 0 before resetting the count
            opacityAnimation.stopAnimation(value => {
                if (value === 0) {
                    setCount(0); // Reset count only when opacity is fully 0
                    isAnimating.current = false; // Mark animation as complete
                }
            })
        });
    }

    const onIncrementLife = () => {
        setLife(life + 1);
        setCount(previous => previous + 1);
        onCountChange()

        // 
        // timeoutRef.current = setTimeout(() => {
        //     setCount(0);
        // }, 2500);
    }

    const onDecrementLife = () => {
        setLife(life - 1);

        setCount(previous => previous - 1);
        onCountChange()

        // clearTimeout(timeoutRef.current)
        // timeoutRef.current = setTimeout(() => {
        //     setCount(0);
        // }, 2500);
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <UnaryOperatorButton afinity={afinity} unaryOperator='minus' onPress={onDecrementLife} />
            </View>
            <View style={styles.content}>
                <Animated.Text
                    style={[styles.count, { color: afinityTheme.styles.color }, {
                        opacity: opacityAnimation,
                        transform: [{ translateY: translateYAnimation }]
                    }]}>
                    {count > 0 ? "+" : ""} {count}
                </Animated.Text>
                <Animated.Text style={styles.life}>{life}</Animated.Text>
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
        textAlign: 'center',
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