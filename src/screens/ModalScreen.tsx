import { Box, StatusBar } from "native-base";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <Box>
      <Text>Modal</Text>
      <Box/>
      <StatusBar barStyle={Platform.OS === "ios" ? "light-content" : "default"} />
    </Box>
  );
}