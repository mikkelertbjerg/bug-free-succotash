import PlayerControls from "@/components/PlayerControls";
import PlayerBoard from "@/components/PlayerBoard";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PlayerBoard afinity="forest" orientation="south">
        <PlayerControls />
      </PlayerBoard>
      <PlayerBoard afinity="plains" orientation="north">
        <PlayerControls />
      </PlayerBoard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
})