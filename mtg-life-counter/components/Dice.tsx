import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    pip: number;
    winner: boolean;
}

const Dice = ({ pip, winner }: Props) => {
    const showPip = (n: number) => {
        switch (n) {
            case 1:
                return <MaterialCommunityIcons name="dice-1-outline" style={styles.dice} />
            case 2:
                return <MaterialCommunityIcons name="dice-2-outline" style={styles.dice} />
            case 3:
                return <MaterialCommunityIcons name="dice-3-outline" style={styles.dice} />
            case 4:
                return <MaterialCommunityIcons name="dice-4-outline" style={styles.dice} />
            case 5:
                return <MaterialCommunityIcons name="dice-5-outline" style={styles.dice} />
            case 6:
                return <MaterialCommunityIcons name="dice-6-outline" style={styles.dice} />
        }
    }
    return (
        <View style={styles.container}>
            {showPip(pip)}
            <Text style={[styles.text, winner ? styles.solid : styles.transparent]}>
                Winner!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(66, 66, 66, 0.25)',
    },
    dice: {
        textAlign: 'center',
        fontSize: 160,
        color: '#fff',
    },
    text: {
        fontSize: 80,
        textAlign: 'center',
        color: '#fff'
    },
    solid: {
        opacity: 1,
    },
    transparent: {
        opacity: 0,
    },
});

export default Dice;