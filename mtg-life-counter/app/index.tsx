import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [life, setLife] = useState<number>(20);
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
<Text></Text>
      </View>
      <View style={styles.controls}>
        <Pressable
          onPress={() => setLife(life - 1)}
        >
          <Text style={styles.counter}>-</Text>
        </Pressable>
        <Text style={styles.life}>{life}</Text>
        <Pressable
          onPress={() => setLife(life + 1)}
        >
          <Text style={styles.counter}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
  },
  life: {
    fontSize: 64,
    color: 'black',
    padding: 16,
  },
  counter: {
    fontSize: 64,
    color: 'black',
    padding: 16,
  }
})