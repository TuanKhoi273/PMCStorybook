/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Image,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  FontText,
  ColorApp,
  Button,
  ButtonType,
  ButtonState,
  RadioButton,
  FloatButton,
  TextButton,
  Input,
  Label,
  Avatar,
} from "./src/component";
import StorybookUI from "./storybook";
import Config from "react-native-config";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Button
            name="DEFAULT NORMAL"
            iconColor={"white"}
            enableButtonLeft={true}
            onPress={() => {
              alert("abc");
            }}
          />

          <Button
            name="DEFAULT ACTIVE"
            type={ButtonType.DEFAULT}
            state={ButtonState.ACTIVE}
            customStyle={{ marginTop: 16 }}
            onPress={() => {
              alert("abc");
            }}
          />
          <Button
            name=" DEFAULT DISABLE"
            type={ButtonType.DEFAULT}
            state={ButtonState.DISABLE}
            customStyle={{ marginTop: 16 }}
            onPress={() => {
              alert("abc");
            }}
          />

          <Button
            name="GHOST NORMAL"
            customStyle={{ marginTop: 16 }}
            type={ButtonType.GHOST}
            onPress={() => {
              alert("abc");
            }}
          />

          <Button
            name="GHOST ACTIVE"
            type={ButtonType.GHOST}
            state={ButtonState.ACTIVE}
            customStyle={{ marginTop: 16 }}
            onPress={() => {
              alert("abc");
            }}
            customLeftComponent={
              <Icon
                style={{ marginRight: 8 }}
                name="search"
                color={"black"}
                size={24}
              ></Icon>
            }
          />
          <Button
            name=" GHOST DISABLE"
            type={ButtonType.GHOST}
            state={ButtonState.DISABLE}
            customStyle={{ marginTop: 16 }}
            enableButtonRight={true}
            onPress={() => {
              alert("abc");
            }}
          />

          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <RadioButton />
            <RadioButton active={true} customStyle={{ marginHorizontal: 12 }} />
            <RadioButton disabled={true} customStyle={{ marginRight: 12 }} />
            <RadioButton active={true} disabled={true} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <FloatButton />

            <FloatButton size={40} />

            <FloatButton
              size={60}
              rounded={true}
              onPress={() => {
                alert("abc");
              }}
              iconColor="red"
              customStyle={{ marginHorizontal: 16 }}
            />

            <FloatButton
              size={60}
              rounded={true}
              onPress={() => {
                alert("abc");
              }}
              iconColor="red"
              customIcon={<Icon name="search" color={"black"} size={24}></Icon>}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <TextButton
              name="DEFAULT"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16 }}
              enableButtonRight={true}
              onPress={() => {
                alert("abc");
              }}
            />

            <TextButton
              name="DEFAULT"
              state={ButtonState.ACTIVE}
              customStyle={{ marginTop: 16 }}
              enableButtonRight={true}
              onPress={() => {
                alert("abc");
              }}
            />

            <TextButton
              name="DEFAULT"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16 }}
              enableButtonLeft={true}
              onPress={() => {
                alert("abc");
              }}
            />
          </View>
          <TextButton
            name="DEFAULT"
            state={ButtonState.DEFAULT}
            customStyle={{ marginTop: 16 }}
            // enableButtonLeft={true}
            onPress={() => {
              alert("abc");
            }}
          />

          <Input placeholder={"Your Phone Number"} />

          <Input placeholder={"Your Phone Number"} enableRightIcon={true} />
          <Input
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            iconRightColor={"red"}
          />
          <Input
            placeholder={"test color"}
            enableRightIcon={true}
            enableLeftIcon={true}
            iconRightColor={"red"}
            inputColor={ColorApp.ACCENT.blue}
          />

          <Input
            customStype={{
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            enableLeftIcon={true}
            value={"abc"}
            secureTextEntry={true}
            onRightClick={() => {
              alert("abc");
            }}
          />

          <Input
            containerStyle={{ marginTop: 16 }}
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            enableLeftIcon={true}
            onRightClick={() => {
              alert("abc");
            }}
            // keyboardType={"password"}
            topLabel="test"
          />

          <Label text={"label"} />
          <Label
            text={"Á À Ả Ạ Ã"}
            color={"red"}
            customStyle={{ marginVertical: 16 }}
          />

          <Avatar />
          <View
            style={{ flexDirection: "row", marginBottom: 56, marginTop: 16 }}
          >
            <Avatar size={72} rounded={true} />

            <Avatar
              size={72}
              rounded={true}
              customStyle={{ marginLeft: 16 }}
              image={
                "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: ColorApp.PRIMARY.blue_01,
    padding: 16,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    // backgroundColor: ColorApp.PRIMARY.blue_04,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  testColor: {
    width: 100,
    height: 20,
  },
});

// export default App;
export default StorybookUI;
console.disableYellowBox = true;
