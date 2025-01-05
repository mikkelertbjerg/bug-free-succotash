import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, View } from "react-native";
import BoardOptions from "@/components/BoardOptions";
import LifeOptions from "@/components/LifeOptions";
import { useState } from "react";
import PlayerControls from "@/components/PlayerControls";

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

  // Reset options
  const [reset, setReset] = useState<boolean>(false);

  // Dice options

  // Player A
  const [playerACurrentLife, setPlayerACurrentLife] = useState<number>(defaultLife);

  // Player B
  const [playerBCurrentLife, setPlayerBCurrentLife] = useState<number>(defaultLife);

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
        <PlayerControls afinity="swamp" currentLife={playerACurrentLife} setCurrentLife={setPlayerACurrentLife} />
      </PlayerBoard>
      {showBoardOptions && <BoardOptions onReset={onReset} onShowLifeOptions={onLifeButtonPressed} />}
      {showLifeOptions && <LifeOptions onSetDefaultLife={onSetDefaultLife} onClose={onCloseOptions} />}
      <PlayerBoard afinity="plains" orientation="north">
        <PlayerControls afinity="plains" currentLife={playerBCurrentLife} setCurrentLife={setPlayerBCurrentLife} />
      </PlayerBoard>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})