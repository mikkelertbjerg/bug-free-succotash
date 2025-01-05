import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, Text, View } from "react-native";
import BoardOptions from "@/components/BoardOptions";
import LifeOptions from "@/components/LifeOptions";
import { useState } from "react";
import PlayerControls from "@/components/PlayerControls";
import Dice from "@/components/Dice";
import DiceText from "@/components/DiceText";

export default function Index() {
  // Board options
  const [showBoardOptions, setShowBoardOptions] = useState<boolean>(true);

  // Life options
  const [showLifeOptions, setShowLifeOptions] = useState<boolean>(false);
  const [defaultLife, setDefaultLife] = useState<number>(20);

  const onLifeButtonPressed = () => {
    setShowBoardOptions(false);
    setShowLifeOptions(true);
  };

  const onSetDefaultLife = (life: number) => {
    setDefaultLife(life);
    setPlayerACurrentLife(life);
    setPlayerBCurrentLife(life);
  }

  // Players options

  // Dice options
  const [rolling, setRolling] = useState<boolean>(false);
  const [showWinner, setShowWinner] = useState<boolean>(false);

  const getRandomInt = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const delay = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));

  const rollDice = async (times: number) => {
    while (times > 0) {
      setPlayerACurrentPip(getRandomInt(1, 6));
      setPlayerBCurrentPip(getRandomInt(1, 6));
      times -= 1;
      await delay(250);
    }
  }

  const onRollDice = async () => {
    if (rolling) {
      return;
    }

    setRolling(true);
    await rollDice(5);
    setShowWinner(true);

    await delay(2500);
    setRolling(false);
    setShowWinner(false);
  }

  // Player A
  const [playerACurrentLife, setPlayerACurrentLife] = useState<number>(defaultLife);
  const [playerACurrentPip, setPlayerACurrentPip] = useState<number>(0);

  // Player B
  const [playerBCurrentLife, setPlayerBCurrentLife] = useState<number>(defaultLife);
  const [playerBCurrentPip, setPlayerBCurrentPip] = useState<number>(0);

  const onCloseOptions = () => {
    setShowLifeOptions(false);
    setShowBoardOptions(true);
  }

  const onReset = () => {
    setPlayerACurrentLife(defaultLife);
    setPlayerBCurrentLife(defaultLife);
  }

  return (
    <View style={styles.container}>
      <PlayerBoard afinity="swamp" orientation="south">
        {rolling ?
          <View style={styles.content}>
            <Dice afinity="swamp" pip={playerACurrentPip} />
            {(showWinner && playerACurrentPip === playerBCurrentPip) && <DiceText text="Draw!" afinity="swamp" />}
            {(showWinner && playerACurrentPip > playerBCurrentPip) && <DiceText text="Winner!" afinity="swamp" />}
          </View>
          :
          <PlayerControls afinity="swamp" currentLife={playerACurrentLife} setCurrentLife={setPlayerACurrentLife} />
        }
      </PlayerBoard>
      {showBoardOptions && <BoardOptions onReset={onReset} onRollDice={onRollDice} rolling={rolling} onShowLifeOptions={onLifeButtonPressed} />}
      {showLifeOptions && <LifeOptions onClose={onCloseOptions} onSetDefaultLife={onSetDefaultLife} />}
      <PlayerBoard afinity="plains" orientation="north">
        {rolling ?
          <View style={styles.content}>
            <Dice afinity="plains" pip={playerBCurrentPip} />
            {(showWinner && playerBCurrentPip === playerACurrentPip) && <DiceText text="Draw!" afinity="plains" />}
            {(showWinner && playerBCurrentPip > playerACurrentPip) && <DiceText text="Winner!" afinity="plains" />}
          </View>
          :
          <PlayerControls afinity="plains" currentLife={playerBCurrentLife} setCurrentLife={setPlayerBCurrentLife} />
        }
      </PlayerBoard>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  }
});