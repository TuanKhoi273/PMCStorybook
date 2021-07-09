import React from "react";
import { storiesOf } from "@storybook/react-native";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { View } from "react-native";
import { styles, generateRow, generateExplainRow } from "./styleCommon";
import Button from "./Button";

import { ButtonState, ButtonType } from "../../component";
const buttonStories = storiesOf("Button", module);

buttonStories
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
            import { Button, ButtonType,ButtonState } from 'pharmacity-component-kits'
            `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "customStyle", "Object", "Null")}
            {generateRow(false, "customTextStyle", "Object", "null")}
            {generateRow(false, "name", "String", "''")}
            {generateRow(false, "onPress", "Function", "null")}
            {generateRow(false, "type", "ButtonType", "ButtonType.DEFAULT")}
            {generateRow(false, "state", "ButtonState", "ButtonState.DEFAULT")}
            {generateRow(false, "iconColor", "String", "black")}
            {generateRow(false, "enableButtonLeft", "boolean", "false")}
            {generateRow(false, "enableButtonRight", "boolean", "false")}
            {generateRow(false, "customLeftComponent", "Component", "null")}
            {generateRow(false, "customRightComponent", "Component", "null")}
            {generateRow(false, "leftIconName", "String", "chevron-left")}
            {generateRow(false, "rightIconName", "String", "chevron-right")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(
              false,
              "customStyle",
              "Style custom for button"
            )}
            {generateExplainRow(
              false,
              "customTextStyle",
              "Style custom for text button"
            )}
            {generateExplainRow(false, "name", "Text name of button")}
            {generateExplainRow(false, "onPress", "Function when click button")}
            {generateExplainRow(
              false,
              "type",
              "Button type :{  DEFAULT,GHOST}"
            )}
            {generateExplainRow(
              false,
              "state",
              "Button state {DEFAULT,ACTIVE,DISABLE}"
            )}
            {generateExplainRow(false, "iconColor", "Color of all in button")}
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
            # Button Default with Name
          </FontText.Heading2>

          <FontText.Heading5 style={{ marginVertical: 12 }}>
            1. Button default type Default
          </FontText.Heading5>
          <Button
            name="DEFAULT NORMAL"
            iconColor={"white"}
            // enableButtonLeft={true}
            onPress={() => {
              alert("abc");
            }}
          />
          <FontText.Heading5 style={{ marginVertical: 12 }}>
            2. Button default type Active
          </FontText.Heading5>
          <Button
            name="DEFAULT ACTIVE"
            state={ButtonState.ACTIVE}
            onPress={() => {
              alert("abc");
            }}
          />
          <FontText.Heading5 style={{ marginVertical: 12 }}>
            3. Button default type Disable
          </FontText.Heading5>
          <Button
            name=" DEFAULT DISABLE"
            state={ButtonState.DISABLE}
            customStyle={{ marginBottom: 16 }}
            onPress={() => {
              alert("abc");
            }}
          />
          <Markdown>{`
              <Button
              name=" DEFAULT DISABLE"
              state={ButtonState.DISABLE}
              onPress={() => {
                alert("abc");
              }}
            />
              `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Button Ghost
          </FontText.Heading2>

          <FontText.Heading5 style={{ marginVertical: 12 }}>
            1. Button ghost type Default
          </FontText.Heading5>
          <Button
            name="GHOST NORMAL"
            iconColor={"white"}
            // enableButtonLeft={true}
            type={ButtonType.GHOST}
            onPress={() => {
              alert("abc");
            }}
          />
          <FontText.Heading5 style={{ marginVertical: 12 }}>
            2. Button ghost type Active
          </FontText.Heading5>
          <Button
            name="GHOST ACTIVE"
            state={ButtonState.ACTIVE}
            type={ButtonType.GHOST}
            onPress={() => {
              alert("abc");
            }}
          />
          <FontText.Heading5 style={{ marginVertical: 12 }}>
            3. Button ghost type Disable
          </FontText.Heading5>
          <Button
            name=" GHOST DISABLE"
            state={ButtonState.DISABLE}
            type={ButtonType.GHOST}
            customStyle={{ marginBottom: 16 }}
            onPress={() => {
              alert("abc");
            }}
          />
          <Markdown>{`
              <Button
              name=" DEFAULT DISABLE"
              state={ButtonState.DISABLE}
              type={ButtonType.GHOST}
              onPress={() => {
                alert("abc");
              }}
            />
              `}</Markdown>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Button with left and right icon
          </FontText.Heading2>

          <Button
            name="DEFAULT NORMAL"
            iconColor={"white"}
            enableButtonLeft={true}
            enableButtonRight={true}
            onPress={() => {
              alert("abc");
            }}
            customStyle={{ marginBottom: 16 }}
          />

          <Markdown>{`
             <Button
             name="DEFAULT NORMAL"
             iconColor={"white"}
             enableButtonLeft={true}
             enableButtonRight={true}
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
            and rightIconName . If don't have icon You need you get custom with
            customRightComponent and customLeftComponent props
          </FontText.Heading3>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Button custom leftIconName props
          </FontText.Heading2>

          <Button
            name="DEFAULT NORMAL"
            iconColor={"white"}
            enableButtonLeft={true}
            leftIconName={"activity"}
            enableButtonRight={false}
            onPress={() => {
              alert("abc");
            }}
            customStyle={{ marginBottom: 16 }}
          />

          <Markdown>{`
             <Button
             name="DEFAULT NORMAL"
             iconColor={"white"}
             enableButtonLeft={true}
             leftIconName={"activity"}
             enableButtonRight={false}
             onPress={() => {
               alert("abc");
             }}
             customStyle={{ marginBottom: 16 }}
           />
              `}</Markdown>

          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
