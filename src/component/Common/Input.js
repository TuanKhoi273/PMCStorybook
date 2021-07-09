import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { ColorApp, FontText } from "../index";
import IconAwesome from "react-native-vector-icons/Feather";
const styles = StyleSheet.create({
  placeholder: {
    fontSize: 15,
    lineHeight: 22,
  },
  input: {
    // paddingHorizontal: 12,
    paddingVertical: 0,
    fontSize: 14,
    borderBottomWidth: 1,
    height: 40,
    borderColor: ColorApp.NEUTRAL.gray_02,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
    // backgroundColor: "white",
  },
  textInputStyle: {
    flex: 1,
    color: "black",
    paddingVertical: 0,
    fontSize: 15,
    lineHeight: 22,
    borderWidth: 0,
  },
  containerStyle: {
    // backgroundColor: "red",
    borderBottomWidth: 1,
  },
});

function Input(props) {
  const textInputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const {
    onPress,
    value,
    enableRightIcon,
    iconRightName = "x",
    iconRightColor = "black",
    enableLeftIcon,
    iconLeftName = "search",
    iconLeftColor = "black",
    editable = true,
    onChangeText,
    placeholder,
    customLeading,
    customTrailing,
    keyboardType,
    customStyle,
    isTextArea,
    placeholderStyle,
    onRightClick,
    secureTextEntry = false,
    inputColor = ColorApp.PRIMARY.blue_04,
    topLabel,
    containerStyle,
  } = props;

  const getChild = () => {
    return (
      <View
        style={[
          styles.containerStyle,
          {
            borderColor: focus ? inputColor : ColorApp.NEUTRAL.gray_02,
            // flexDirection: "row",
            // alignItems: "center",
          },
          containerStyle ?? {},
        ]}
      >
        {topLabel ? (
          <FontText.SmallText style={{ color: inputColor }}>
            {topLabel}
          </FontText.SmallText>
        ) : null}
        <View style={[styles.input, customStyle ? customStyle : {}]}>
          {customLeading ? customLeading : null}
          {enableLeftIcon ? (
            <IconAwesome
              name={iconLeftName}
              size={20}
              color={focus ? inputColor : iconLeftColor}
              style={{ marginRight: 4 }}
            />
          ) : null}
          <TextInput
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            ref={textInputRef}
            numberOfLines={isTextArea ? 4 : null}
            multiline={isTextArea ? true : false}
            textAlignVertical={isTextArea ? "top" : "center"}
            style={styles.textInputStyle}
            editable={editable}
            placeholder={placeholder ?? ""}
            placeholderStyle={[styles.placeholder, placeholderStyle ?? {}]}
            onChangeText={(value) => {
              if (onChangeText) {
                onChangeText(value);
              }
            }}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType ? keyboardType : "default"}
            value={value}
            underlineColorAndroid="transparent"
          />
          {/* {enableRightIcon ? ( */}
          <TouchableOpacity
            onPress={() => {
              if (onRightClick) {
                onRightClick();
              }
            }}
          >
            <IconAwesome
              name={iconRightName}
              size={20}
              color={iconRightColor}
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
          {/* ) : null} */}
          {customTrailing ? customTrailing : null}
        </View>
      </View>
    );
  };

  return (
    <View>
      {editable ? (
        getChild()
      ) : (
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
        >
          {getChild()}
        </TouchableOpacity>
      )}
      {/* {errorInputState && errorText ? (
        <FontText.FontCaption
          style={{ color: ColorApp.ERROR_COLOR, marginTop: 8 }}
        >
          {errorText ?? ""}
        </FontText.FontCaption>
      ) : null} */}
    </View>
  );
}

export default Input;
