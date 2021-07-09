import { FontText, ColorApp } from "../../component";
import { View, Linking, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
export const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorApp.PRIMARY.blue_05,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    // borderColor: "white",
  },
  headerText: {
    color: "white",
    textAlign: "center",
  },

  value: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: ColorApp.PRIMARY.blue_05,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 0.5,
  },
  valueText: {
    color: "black",
    textAlign: "center",
  },
  table: {
    borderWidth: 0.5,
  },
  color: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 8,
  },
});
export const generateColor = (color, name) => {
  return (
    <View style={[styles.color, { backgroundColor: color }]}>
      <FontText.Body1>{name}</FontText.Body1>
    </View>
  );
};
export const generateRow = (header, name, type, defaultValue) => {
  if (header) {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={styles.header}>
          <FontText.Heading4 style={styles.headerText}>
            {name}
          </FontText.Heading4>
        </View>
        <View style={styles.header}>
          <FontText.Heading4 style={styles.headerText}>
            {type}
          </FontText.Heading4>
        </View>
        <View style={styles.header}>
          <FontText.Heading4 style={styles.headerText}>
            {defaultValue}
          </FontText.Heading4>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.value}>
        <FontText.Body1 style={styles.valueText}>{name}</FontText.Body1>
      </View>
      <View style={styles.value}>
        <FontText.Body1 style={styles.valueText}>{type}</FontText.Body1>
      </View>
      <View style={styles.value}>
        <FontText.Body1 style={styles.valueText}>{defaultValue}</FontText.Body1>
      </View>
    </View>
  );
};

export const generateExplainRow = (header, name, explain) => {
  if (header) {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={styles.header}>
          <FontText.Heading4 style={styles.headerText}>
            {name}
          </FontText.Heading4>
        </View>
        <View style={styles.header}>
          <FontText.Heading4 style={styles.headerText}>
            {explain}
          </FontText.Heading4>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.value}>
        <FontText.Body1 style={styles.valueText}>{name}</FontText.Body1>
      </View>
      <View style={styles.value}>
        <FontText.Body1 style={styles.valueText}>{explain}</FontText.Body1>
      </View>
    </View>
  );
};
