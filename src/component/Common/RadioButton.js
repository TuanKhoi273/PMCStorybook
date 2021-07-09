import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ColorApp } from "../index";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: ColorApp.PRIMARY.blue_04,
  },
});

function RadioButton(props) {
  const { customStyle, active, disabled } = props;
  useEffect(() => {}, []);

  return (
    <View
      opacity={disabled ? 0.8 : 1}
      style={[
        styles.container,
        active ? { borderWidth: 8 } : null,
        disabled ? { borderColor: ColorApp.NEUTRAL.gray_02 } : null,
        customStyle ?? {},
      ]}
    ></View>
  );
}

export default RadioButton;
