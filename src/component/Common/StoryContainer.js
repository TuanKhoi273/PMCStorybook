import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ColorApp } from "../index";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

function RadioButton(props) {
  const { child } = props;
  useEffect(() => {}, []);

  return <ScrollView style={styles.container}>{child}</ScrollView>;
}

export default RadioButton;
