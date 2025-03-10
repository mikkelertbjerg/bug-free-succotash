import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { cancelAnimation, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import UnaryOperatorButton from "./UnaryOperatorButton";
import ThemeButton from "./ThemeButton";
import ThemeModal from "./ThemeModal";
import { Player } from "@/types/player";
import { useThemeContext } from "@/context/ThemeContext";

type Props = {
    player: Player;
    life: number;
    setLife: (life: number) => void;
}

const PlayerControls = ({ player, life, setLife, }: Props) => {
    const { playerThemes } = useThemeContext();
    const theme = playerThemes[player]; // Get player's theme

    const [count, setCount] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

    // // Shared animation values
    const opacityAnimation = useSharedValue<number>(0);
    const translateYAnimation = useSharedValue<number>(10);

    // Track fade-out timeout
    const fadeOutTimeout = useRef<NodeJS.Timeout | null>(null);
    const isAnimating = useRef<boolean>(false); // Prevent premature count reset


    const onCountChange = () => {
        // Mark animation as active
        isAnimating.current = true;

        // Cancel any running animations
        cancelAnimation(opacityAnimation);
        cancelAnimation(translateYAnimation);

        // Clear previous timeout to prevent early fade-out
        if (fadeOutTimeout.current) {
            clearTimeout(fadeOutTimeout.current);
        }

        // Start fade-in animation
        opacityAnimation.value = withTiming(1, { duration: 250 });
        translateYAnimation.value = withTiming(0, { duration: 250 });

        // Start fade-out delay
        fadeOutTimeout.current = setTimeout(() => {
            opacityAnimation.value = withTiming(0, { duration: 500 }, (finished) => {
                // Only reset count if no new animation started
                if (finished && opacityAnimation.value === 0) {
                    // Ensure this runs on the JS thread
                    runOnJS(setCount)(0);
                }
            });
            translateYAnimation.value = withTiming(10, { duration: 500 });

            // Allow reset only if no new animation started
            isAnimating.current = false;
        }, 2000);
    };

    // Animated styles
    const animatedStyles = useAnimatedStyle(() => ({
        opacity: opacityAnimation.value,
        transform: [{ translateY: translateYAnimation.value }],
    }));

    const onIncrementLife = () => {
        setLife(life + 1);
        setCount(previous => previous + 1);
        onCountChange()
    }

    const onDecrementLife = () => {
        setLife(life - 1);
        setCount(previous => previous - 1);
        onCountChange()
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <UnaryOperatorButton unaryOperator='minus' onPress={onDecrementLife} />
            </View>
            <View style={styles.content}>
                <Animated.Text
                    style={[
                        styles.count,
                        theme.styles,
                        animatedStyles
                    ]}
                >
                    {count > 0 ? "+" : ""} {count}
                </Animated.Text>
                <Animated.Text style={styles.life}>{life}</Animated.Text>
                <ThemeButton source={theme.source} onPress={() => setShowModal(true)} />
            </View>
            <View style={{ flex: 1 }}>
                <UnaryOperatorButton unaryOperator='plus' onPress={onIncrementLife} />
            </View>
            {showModal &&
                <View style={StyleSheet.absoluteFill}>
                    <ThemeModal visible={showModal} setVisibility={setShowModal} player={player} />
                </View>
            }
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
            width: 1,
            height: 1,
        },
    },
});

export default PlayerControls;