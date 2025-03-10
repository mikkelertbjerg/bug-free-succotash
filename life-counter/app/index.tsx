import PlayerBoard from "@/components/PlayerBoard";
import { StatusBar, StyleSheet, View } from "react-native";
import BoardOptions from "@/components/BoardOptions";
import LifeOptions from "@/components/LifeOptions";
import { useState } from "react";
import PlayerControls from "@/components/PlayerControls";
import Dice from "@/components/Dice";

export default function Index() {
  // Board
  const [showBoardOptions, setShowBoardOptions] = useState<boolean>(true);

  // Life
  const [showLifeOptions, setShowLifeOptions] = useState<boolean>(false);
  const [startingLife, setStartingLife] = useState<number>(20);

  const onLifeButtonPressed = () => {
    setShowBoardOptions(false);
    setShowLifeOptions(true);
  };

  const onSetStartingLife = (life: number) => {
    setStartingLife(life);
    setPlayerALife(life);
    setPlayerBLife(life);
  }

  // Dice
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
    setPlayerAPip(arr[0]);
    setPlayerBPip(arr[1]);
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
  const [playerALife, setPlayerALife] = useState<number>(startingLife);
  const [playerAPip, setPlayerAPip] = useState<number>(0);

  // Player B
  const [playerBife, setPlayerBLife] = useState<number>(startingLife);
  const [playerBPip, setPlayerBPip] = useState<number>(0);

  // Options
  const onCloseOptions = () => {
    setShowLifeOptions(false);
    setShowBoardOptions(true);
  }

  const onReset = () => {
    setPlayerALife(startingLife);
    setPlayerBLife(startingLife);
  }

  return (
    <View style={styles.container}>
      <PlayerBoard player={"playerA"} orientation="south">
        {rolling ?
          <Dice pip={playerAPip} winner={showWinner && playerAPip > playerBPip} />
          :
          <PlayerControls
            player={"playerA"}
            life={playerALife}
            setLife={setPlayerALife} />
        }
      </PlayerBoard>
      {showBoardOptions && <BoardOptions onReset={onReset} onRollDice={onRollDice} rolling={rolling} onShowLifeOptions={onLifeButtonPressed} />}
      {showLifeOptions && <LifeOptions onClose={onCloseOptions} onSetStartingLife={onSetStartingLife} />}
      <PlayerBoard player={"playerB"} orientation="north">
        {rolling ?
          <Dice pip={playerBPip} winner={showWinner && playerBPip > playerAPip} />
          :
          <PlayerControls
            player={"playerB"}
            life={playerBife}
            setLife={setPlayerBLife} />
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