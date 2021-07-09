import React from "react";
import { storiesOf } from "@storybook/react-native";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
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
} from "..";
import { View, Linking, TouchableOpacity } from "react-native";

const copy = `
# Welcome to PMC Component Kit
This is PMC component kits from PMC app team. It helps you create mini applications in PMC platform. npm: [**Link**](https://www.npmjs.com/package/pharmacity-component-kits)

# Install
yarn add pharmacity-component-kits
//or
npm i pharmacity-component-kits
`;

const howToUse = `
# Install
yarn add pharmacity-component-kits
//or
npm i pharmacity-component-kits
`;
const buttonStories = storiesOf("OverView", module);

buttonStories
  .add("Getting start", () => (
    <StoryContainer
      child={
        <View>
          <FontText.Heading1>Welcome to PMC Component Kit</FontText.Heading1>

          <FontText.Body1 style={{ marginTop: 12 }}>
            This is PMC component kits from PMC app team. It helps you create
            mini applications in PMC platform. npm:
            <FontText.Body1
              style={{ color: ColorApp.PRIMARY.blue_05 }}
              onPress={() =>
                Linking.openURL(
                  "https://www.npmjs.com/package/pharmacity-component-kits"
                )
              }
            >
              {" "}
              https://www.npmjs.com/package/pharmacity-component-kits
            </FontText.Body1>
          </FontText.Body1>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Install
          </FontText.Heading2>
          <View
            style={{
              backgroundColor: ColorApp.PRIMARY.blue_04,
              padding: 12,
              borderRadius: 8,
            }}
          >
            <FontText.Body1 style={{ color: "white" }}>
              yarn add pharmacity-component-kits
            </FontText.Body1>
            <FontText.Body1 style={{ color: "white" }}>Or</FontText.Body1>
            <FontText.Body1 style={{ color: "white" }}>
              npm i pharmacity-component-kits
            </FontText.Body1>
          </View>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Usage
          </FontText.Heading2>

          <Markdown>{`
            import { Button, ButtonType } from 'pharmacity-component-kits'

            // primary
            <Button
                text="Pharmacity Button"
                type={ButtonType.primary}
            />
            
            // primary border
            <Button
                text="Pharmacity Button"
                type={ButtonType.primaryBorder}
            />
            
            // primary border with icon
            <Button
                icon={PharmacityIcons.ic_close_24}
                text="Custom Text Style"
                type={ButtonType.primaryBorder}
            />

            `}</Markdown>
        </View>
      }
    />
  ))
  .add("All of Component", () => (
    <StoryContainer
      child={
        <View>
          <FontText.Heading1>Some Components of PCM Kit</FontText.Heading1>

          <FontText.Heading2 style={{ marginVertical: 12 }}>
            1. Button
          </FontText.Heading2>
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

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            2. Radio Button
          </FontText.Heading2>

          <View style={{ flexDirection: "row" }}>
            <RadioButton />
            <RadioButton active={true} customStyle={{ marginHorizontal: 12 }} />
            <RadioButton disabled={true} customStyle={{ marginRight: 12 }} />
            <RadioButton active={true} disabled={true} />
          </View>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            3. Float Button
          </FontText.Heading2>
          <View style={{ flexDirection: "row" }}>
            <FloatButton />

            <FloatButton size={40} customStyle={{ marginLeft: 16 }} />

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

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            4. Text Button
          </FontText.Heading2>

          <View style={{ flexDirection: "row" }}>
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
            <TextButton
              name="DEFAULT"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16, marginLeft: 16 }}
              // enableButtonLeft={true}
              onPress={() => {
                alert("abc");
              }}
            />
          </View>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            5. Input
          </FontText.Heading2>

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

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            6. Label
          </FontText.Heading2>

          <Label text={"label"} />
          <Label
            text={"Á À Ả Ạ Ã"}
            color={"red"}
            customStyle={{ marginVertical: 16 }}
          />
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            7. Avatar
          </FontText.Heading2>

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
        </View>
      }
    ></StoryContainer>
  ));
