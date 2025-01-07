import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    afinity: Afinity;
    pip: number;
    winner: boolean;
}

const Dice = ({ afinity, pip, winner }: Props) => {
    const showPip = (n: number) => {
        switch (n) {
            case 1:
                return <MaterialCommunityIcons name="dice-1-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
            case 2:
                return <MaterialCommunityIcons name="dice-2-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
            case 3:
                return <MaterialCommunityIcons name="dice-3-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
            case 4:
                return <MaterialCommunityIcons name="dice-4-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
            case 5:
                return <MaterialCommunityIcons name="dice-5-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
            case 6:
                return <MaterialCommunityIcons name="dice-6-outline" style={[styles.dice, afinity === 'plains' ? styles.dark : styles.light]} />
        }
    }
    return (
        <View style={styles.container}>
            {showPip(pip)}
            <Text style={[styles.text, afinity === 'plains' ? styles.dark : styles.light, winner ? styles.solid : styles.transparent]}>
                Winner!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    dice: {
        textAlign: 'center',
        fontSize: 160,
    },
    text: {
        fontSize: 72,
        textAlign: 'center',
    },
    light: {
        color: 'white'
    },
    dark: {
        color: '#616161'
    },
    solid: {
        opacity: 100,
    },
    transparent: {
        opacity: 0,
    },
});

export default Dice;