import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, Text, View } from "react-native";
import BoardOptions from "@/components/BoardOptions";
import LifeOptions from "@/components/LifeOptions";
import { useState } from "react";
import PlayerControls from "@/components/PlayerControls";
import Dice from "@/components/Dice";

export default function Index() {
  // Board options
  const [showBoardOptions, setShowBoardOptions] = useState<boolean>(true);

  // Life options
  const [showLifeOptions, setShowLifeOptions] = useState<boolean>(false);
  const [startingLife, setStartingLife] = useState<number>(20);

  const onLifeButtonPressed = () => {
    setShowBoardOptions(false);
    setShowLifeOptions(true);
  };

  const onSetStartingLife = (life: number) => {
    setStartingLife(life);
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

  const rollDice = () => {
    const set = new Set<number>();
    while (set.size < 2) {
      set.add(getRandomInt(1, 6));
    }

    const arr = [...set];
    setPlayerACurrentPip(arr[0]);
    setPlayerBCurrentPip(arr[1]);
  }

  const onRollDice = async () => {
    if (rolling) {
      return;
    }

    setRolling(true);
    let rolls = 0;
    while (rolls < 4) {
      rollDice();
      await delay(250);
      rolls++;
    }

    rollDice(); // final roll
    setShowWinner(true);

    await delay(2500);
    setRolling(false);
    setShowWinner(false);
  }

  // Player A
  const [playerACurrentLife, setPlayerACurrentLife] = useState<number>(startingLife);
  const [playerACurrentPip, setPlayerACurrentPip] = useState<number>(0);

  // Player B
  const [playerBCurrentLife, setPlayerBCurrentLife] = useState<number>(startingLife);
  const [playerBCurrentPip, setPlayerBCurrentPip] = useState<number>(0);

  const onCloseOptions = () => {
    setShowLifeOptions(false);
    setShowBoardOptions(true);
  }

  const onReset = () => {
    setPlayerACurrentLife(startingLife);
    setPlayerBCurrentLife(startingLife);
  }

  return (
    <View style={styles.container}>
      <PlayerBoard afinity="swamp" orientation="south">
        {rolling ?
          <Dice pip={playerACurrentPip} winner={showWinner && playerACurrentPip > playerBCurrentPip} />
          :
          <PlayerControls afinity="swamp" currentLife={playerACurrentLife} setCurrentLife={setPlayerACurrentLife} />
        }
      </PlayerBoard>
      {showBoardOptions && <BoardOptions onReset={onReset} onRollDice={onRollDice} rolling={rolling} onShowLifeOptions={onLifeButtonPressed} />}
      {showLifeOptions && <LifeOptions onClose={onCloseOptions} onSetStartingLife={onSetStartingLife} />}
      <PlayerBoard afinity="plains" orientation="north">
        {rolling ?
          <Dice pip={playerBCurrentPip} winner={showWinner && playerBCurrentPip > playerACurrentPip} />
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
});