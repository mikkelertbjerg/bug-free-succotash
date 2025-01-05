import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, View } from "react-native";
import PlayerOptions from "@/components/PlayerOptions";
import LifeOptions from "@/components/LifeOptions";
import { useContext, useState } from "react";
import { OptionsContext } from "@/context/OptionsContext";

export default function Index() {
  const options = useContext(OptionsContext);
  const [showPlayerOptions, setPlayerShowOptions] = useState<boolean>(true);
  const [showLifeOptions, setShowLifeOptions] = useState<boolean>(false);

  const onCloseOptions = () => {
    setShowLifeOptions(false);
    setPlayerShowOptions(true);
  }

  const onLifeButtonPressed = () => {
    setPlayerShowOptions(false);
    setShowLifeOptions(true);
  };

  const onReset = () => {

  }

  return (
    <View style={styles.container}>
      <OptionsContext.Provider value={options}>
        <PlayerBoard afinity="forest" orientation="south" />
        {showPlayerOptions && <PlayerOptions onResetButtonPressed={onReset} onShowLifeOptions={onLifeButtonPressed} />}
        {showLifeOptions && <LifeOptions onClose={onCloseOptions} />}
        <PlayerBoard afinity="plains" orientation="north" />
      </OptionsContext.Provider>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})