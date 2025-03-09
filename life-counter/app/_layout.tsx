import { Stack } from "expo-router";
import React from "react";
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar, useColorScheme } from "react-native";
import { ThemeProvider } from "@/context/ThemeContext";

const RootLayout = () => {
  const theme = useColorScheme();
  useKeepAwake();

  return (
    <>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000' : '#fff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
