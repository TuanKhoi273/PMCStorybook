import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Avatar from "./Avatar";
import FloatButton from "./FloatButton";
import Label from "./Label";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { styles, generateRow, generateExplainRow } from "./styleCommon";

import { ButtonState, ButtonType } from "../../component";

const avatarStories = storiesOf("Label", module);

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
        import { Label } from 'pharmacity-component-kits'
        `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "color", "String", "ColorApp.PRIMARY.blue_02")}
            {generateRow(false, "text", "String", "''")}
            {generateRow(false, "customStyle", "Object", "{}")}
            {generateRow(false, "customTextStyle", "Object", "{}")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(false, "color", "Background color of Label")}
            {generateExplainRow(false, "text", "Value of text label")}
            {generateExplainRow(
              false,
              "customStyle",
              "You can custom Label with it"
            )}
            {generateExplainRow(
              false,
              "customTextStyle",
              "You can custom text of Label with it"
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
            # Label Default
          </FontText.Heading2>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <Label text={"test"} />
            <Label
              text={"Semetic Megeta"}
              color={ColorApp.SEMATIC.megeta}
              customStyle={{ marginHorizontal: 16 }}
            />
          </View>

          <Markdown>{`
           <Label
           text={"Semetic Megeta"}
           color={ColorApp.SEMATIC.megeta}
           customStyle={{ marginHorizontal: 16 }}
         />
              `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Label Custom Text Style
          </FontText.Heading2>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <Label
              text={"Custom Text Style"}
              color={ColorApp.SEMATIC.yellow}
              customStyle={{ marginHorizontal: 16 }}
              customTextStyle={{ fontSize: 30, lineHeight: 40 }}
            />
          </View>

          <Markdown>{`
           <Label
           text={"Custom Text Style"}
           color={ColorApp.SEMATIC.yellow}
           customStyle={{ marginHorizontal: 16 }}
           customTextStyle={{ fontSize: 30, lineHeight: 40 }}
         />
              `}</Markdown>

          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
