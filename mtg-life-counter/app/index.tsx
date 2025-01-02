import PlayerControls from "@/components/PlayerControls";
import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, View } from "react-native";
import PlayerOptions from "@/components/PlayerOptions";
import { useState } from "react";

export default function Index() {
  const [life, setLife] = useState<number>(20);
  const onSetLife = () => {

  }

  return (
    <View style={styles.container}>
      <PlayerBoard afinity="forest" orientation="south">
        <PlayerControls life={life} />
      </PlayerBoard>
      <PlayerOptions />
      <PlayerBoard afinity="plains" orientation="north">
        <PlayerControls life={life} />
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