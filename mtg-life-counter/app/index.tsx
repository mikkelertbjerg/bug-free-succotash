import Player from "@/components/Player";
import { StyleSheet, View } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <Player />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})