import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ColorApp, FontText, ButtonType, ButtonState } from "../index";
import Icon from "react-native-vector-icons/Feather";
const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorApp.PRIMARY.blue_04,
    width: "100%",
    height: 54,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textStyle: {
    color: ColorApp.NEUTRAL.gray_07,
    marginHorizontal: 2,
  },
});

const BUTTON_COLOR = {
  DEFAULT_BUTTON_COLOR: ColorApp.PRIMARY.blue_04,
  ACTIVE_BUTTON_COLOR: ColorApp.PRIMARY.blue_05,
  DISABLE_BUTTON_COLOR: ColorApp.NEUTRAL.gray_02,
};

function Button(props) {
  const {
    customStyle,
    customTextStyle,
    name,
    onPress,
    type = ButtonType.DEFAULT,
    state = ButtonState.DEFAULT,
    iconColor = "black",
    enableButtonLeft = false,
    enableButtonRight = false,
    customLeftComponent = null,
    customRightComponent = null,
    leftIconName = "chevron-left",
    rightIconName = "chevron-right",
  } = props;
  useEffect(() => {}, []);
  const getButtonColor = () => {
    switch (state) {
      case ButtonState.ACTIVE:
        return BUTTON_COLOR.ACTIVE_BUTTON_COLOR;
      case ButtonState.DISABLE:
        return BUTTON_COLOR.DISABLE_BUTTON_COLOR;
      default:
        return BUTTON_COLOR.DEFAULT_BUTTON_COLOR;
    }
  };
  const defaultButtonStyle = { backgroundColor: getButtonColor() };
  const ghostButtonStyle = {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: getButtonColor(),
  };
  const buttonStyle = [
    styles.container,
    type == ButtonType.GHOST ? ghostButtonStyle : defaultButtonStyle,
    customStyle ?? {},
  ];

  const defaultTextStyle = { color: "white" };
  const ghostTextStyle = {
    color: getButtonColor(),
  };
  const textStyle = [
    styles.textStyle,
    type == ButtonType.GHOST ? ghostTextStyle : defaultTextStyle,
    customTextStyle ?? {},
  ];
  return (
    <View opacity={state == ButtonState.DISABLE ? 0.8 : 1}>
      <TouchableOpacity
        style={[buttonStyle]}
        onPress={state == ButtonState.DISABLE ? null : onPress}
        activeOpacity={state == ButtonState.DISABLE ? 1 : 0.2}
      >
        {customLeftComponent ? customLeftComponent : null}
        {enableButtonLeft ? (
          <Icon name={leftIconName} color={iconColor} size={24} />
        ) : null}
        <FontText.Button1 style={textStyle}>{name}</FontText.Button1>
        {enableButtonRight ? (
          <Icon name={rightIconName} color={iconColor} size={24} />
        ) : null}
        {customRightComponent ? customRightComponent : null}
      </TouchableOpacity>
    </View>
  );
}

export default Button;
