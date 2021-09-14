import { Box } from "native-base";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/styled/CustomButton";

export default function TabThreeScreen() {
  return (
    <Box>
      <CustomButton
        bg="#F0E659"
        _pressed={{ bg: "#F8A14F" }}
        onPress={() => {
          console.log("hi");
        }}
      >
        하이
      </CustomButton>
    </Box>
  );
}
