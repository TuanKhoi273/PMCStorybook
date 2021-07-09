import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { ColorApp, FontText } from "../index";
import Icon from "react-native-vector-icons/Feather";
const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorApp.PRIMARY.blue_04,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: ColorApp.NEUTRAL.gray_07,
    // marginHorizontal: 4,
  },
});

function Avatar(props) {
  const {
    size = 48.0,
    rounded = false,
    onPress,
    customStyle,
    image,
    name = "avatar",
    customTextStyle,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: rounded ? size / 2 : 12,
        },
        customStyle ?? {},
      ]}
    >
      {image ? (
        <Image
          style={[
            styles.container,
            {
              width: size,
              height: size,
              borderRadius: rounded ? size / 2 : 12,
            },
          ]}
          source={{
            uri: image,
          }}
        />
      ) : (
        <FontText.Button1 style={[styles.textStyle, customTextStyle ?? {}]}>
          {name.substring(0, 2)}
        </FontText.Button1>
      )}
    </TouchableOpacity>
  );
}

export default Avatar;
