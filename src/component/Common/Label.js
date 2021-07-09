import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ColorApp, FontText } from "../index";
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ColorApp.NEUTRAL.gray_02,
    alignSelf: "baseline",
    borderRadius: 20,
    paddingVertical: 4,
  },
});

function Label(props) {
  const {
    color = ColorApp.PRIMARY.blue_04,
    text,
    customStyle,
    customTextStyle,
  } = props;

  return (
    <View
      style={[styles.container, { backgroundColor: color }, customStyle ?? {}]}
    >
      <FontText.Body3
        style={[{ color: "white" }, customTextStyle ? customTextStyle : {}]}
      >
        {text ?? ""}
      </FontText.Body3>
    </View>
  );
}

export default Label;
