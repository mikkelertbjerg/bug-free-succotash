import PlayerControls from "@/components/PlayerControls";
import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, View } from "react-native";
import PlayerOptions from "@/components/PlayerOptions";
import { useState } from "react";
import LifeOptions from "@/components/LifeOptions";
import useForceUpdate from "@/hooks/useForceUpdate";

export default function Index() {
  const forceUpdate = useForceUpdate();

  const [showPlayerOptions, setPlayerShowOptions] = useState<boolean>(true);

  const [defaultLife, setDefaultLife] = useState<number>(20);
  const [showLifeOptions, setShowLifeOptions] = useState<boolean>(false);

  const onCloseOptions = () => {
    setShowLifeOptions(false);
    setPlayerShowOptions(true);
  }

  const onResetPressed = () => {
    setDefaultLife(defaultLife);
    forceUpdate();
  }
  const onLifeButtonPressed = () => {
    setPlayerShowOptions(false);
    setShowLifeOptions(true);
  };

  const onSetDefaultLife = (life: number) => {
    setDefaultLife(life)
    onCloseOptions();
    forceUpdate();
  }

  return (
    <View style={styles.container}>
      <PlayerBoard life={defaultLife} afinity="forest" orientation="south" />
      {showPlayerOptions && <PlayerOptions onResetButtonPressed={onResetPressed} onLifeButtonPressed={onLifeButtonPressed} />}
      {showLifeOptions && <LifeOptions onClose={onCloseOptions} onSetLife={onSetDefaultLife} />}
      <PlayerBoard life={defaultLife} afinity="plains" orientation="north" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})