import { Stack } from "expo-router";
import React from "react";
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar, useColorScheme } from "react-native";

const RootLayout = () => {
  const theme = useColorScheme();
  useKeepAwake();
  
  return (
    <>
      <StatusBar 
      backgroundColor={theme === 'dark' ? '#000' : '#fff'}
      barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default RootLayout;
