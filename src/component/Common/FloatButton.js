import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ColorApp } from "../index";
import Icon from "react-native-vector-icons/Feather";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ColorApp.NEUTRAL.gray_02,
  },
  textStyle: {
    color: ColorApp.NEUTRAL.gray_07,
    marginHorizontal: 4,
  },
});

function FloatButton(props) {
  const {
    size = 24.0,
    rounded = false,
    iconColor = "black",
    onPress,
    customStyle,
    iconName = "chevron-left",
    customIcon,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: rounded ? size / 2 : 4,
        },
        customStyle ?? {},
      ]}
      onPress={onPress}
    >
      {customIcon ? (
        customIcon
      ) : (
        <Icon name={iconName} color={iconColor} size={size / 2} />
      )}
    </TouchableOpacity>
  );
}

export default FloatButton;
