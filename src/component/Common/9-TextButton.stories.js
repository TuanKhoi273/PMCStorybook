import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Avatar from "./Avatar";
import TextButton from "./TextButton";
import RadioButton from "./RadioButton";
import Label from "./Label";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { styles, generateRow, generateExplainRow } from "./styleCommon";

import { ButtonState, ButtonType } from "../../component";

const avatarStories = storiesOf("TextButton", module);

// lets storybook know to show the knobs addon for this story
avatarStories.addDecorator(withKnobs);

// I use to boolean knob to set the disabled prop based on the knob state
// I use the action function to log every time the button gets called
avatarStories
  .add("Import and Props", () => (
    <StoryContainer
      child={
        <View>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Import
          </FontText.Heading2>
          <Markdown>{`
        import { TextButton } from 'pharmacity-component-kits'
        `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "customStyle", "Object", "{}")}
            {generateRow(false, "customTextStyle", "Object", "{}")}
            {generateRow(false, "name", "String", "''")}
            {generateRow(false, "onPress", "Function", "null")}
            {generateRow(false, "state", "ButtonState", "ButtonState.DEFAULT")}
            {generateRow(false, "enableButtonLeft", "boolean", "false")}
            {generateRow(false, "enableButtonRight", "boolean", "false")}
            {generateRow(false, "customLeftComponent", "Component", "null")}
            {generateRow(false, "customRightComponent", "Component", "null")}
            {generateRow(false, "leftIconName", "String", "plus")}
            {generateRow(false, "rightIconName", "String", "chevron-right")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(
              false,
              "customStyle",
              "You can custom TextButton with it"
            )}
            {generateExplainRow(
              false,
              "customTextStyle",
              "You can custom text of TextButton with it"
            )}
            {generateExplainRow(false, "name", "Value text of TextButton")}
            {generateExplainRow(
              false,
              "onPress",
              "Function when click TextButton"
            )}
            {generateExplainRow(
              false,
              "State",
              "State of TextButton {Active,Default}"
            )}

            {generateExplainRow(
              false,
              "enableButtonLeft",
              "On off Icon left, default off"
            )}
            {generateExplainRow(
              false,
              "enableButtonRight",
              "On off Icon right, default off"
            )}
            {generateExplainRow(
              false,
              "customLeftComponent",
              "If U don't want use Feather Icon , You can custom left component of button with it."
            )}
            {generateExplainRow(
              false,
              "customRightComponent",
              "If U don't want use Feather Icon, You can custom right component of button with it."
            )}
            {generateExplainRow(
              false,
              "leftIconName",
              "You can custom left icon name with it, find icon name in https://feathericons.com"
            )}
            {generateExplainRow(
              false,
              "rightIconName",
              "You can custom right icon name with it, find icon name in https://feathericons.com"
            )}
          </View>
        </View>
      }
    />
  ))
  .add("Example", () => (
    <StoryContainer
      child={
        <View>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Text Button
          </FontText.Heading2>
          <View style={{ marginTop: 16, alignItems: "flex-start" }}>
            <TextButton
              name="DEFAULT"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16 }}
              // enableButtonRight={true}
              onPress={() => {
                alert("abc");
              }}
            />

            <View style={{ height: 16 }} />
            <Markdown>{`
          <TextButton
          name="DEFAULT"
          state={ButtonState.DEFAULT}
          customStyle={{ marginTop: 16 }}
          // enableButtonRight={true}
          onPress={() => {
            alert("abc");
          }}
        />
              `}</Markdown>

            <TextButton
              name="DEFAULT WITH RIGHT ICON"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16 }}
              enableButtonRight={true}
              onPress={() => {
                alert("abc");
              }}
            />

            <View style={{ height: 16 }} />
            <Markdown>{`
         <TextButton
         name="DEFAULT WITH RIGHT ICON"
         state={ButtonState.DEFAULT}
         customStyle={{ marginTop: 16 }}
         enableButtonRight={true}
         onPress={() => {
           alert("abc");
         }}
       />
              `}</Markdown>

            <TextButton
              name="ACTIVE WITH RIGHT ICON"
              state={ButtonState.ACTIVE}
              customStyle={{ marginTop: 16 }}
              enableButtonRight={true}
              onPress={() => {
                alert("abc");
              }}
            />

            <View style={{ height: 16 }} />
            <Markdown>{`
         <TextButton
         name="ACTIVE WITH RIGHT ICON"
         state={ButtonState.ACTIVE}
         customStyle={{ marginTop: 16 }}
         enableButtonRight={true}
         onPress={() => {
           alert("abc");
         }}
       />
              `}</Markdown>

            <TextButton
              name="DEFAULT WITH LEFT ICON"
              state={ButtonState.DEFAULT}
              customStyle={{ marginTop: 16 }}
              enableButtonLeft={true}
              onPress={() => {
                alert("abc");
              }}
            />
          </View>
          <View style={{ height: 16 }} />
          <Markdown>{`
           <TextButton
           name="DEFAULT WITH LEFT ICON"
           state={ButtonState.DEFAULT}
           customStyle={{ marginTop: 16 }}
           enableButtonLeft={true}
           onPress={() => {
             alert("abc");
           }}
         />
              `}</Markdown>

          <FontText.Heading3
            style={{ marginVertical: 12, color: ColorApp.SEMATIC.green }}
          >
            Icon name I use react-native-vector-icons/Feather you can get in
            link: #https://feathericons.com, and change with props leftIconName
            or rightIconName . If don't have icon You need you get custom with
            customLeftComponent props or customRightComponent
          </FontText.Heading3>

          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
