import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import RadioButton from "./RadioButton";
import { withKnobs } from "@storybook/addon-knobs";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { styles, generateRow, generateExplainRow } from "./styleCommon";

const avatarStories = storiesOf("RadioButton", module);

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
        import { RadioButton } from 'pharmacity-component-kits'
        `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "active", "boolean", "false")}
            {generateRow(false, "disabled", "boolean", "false")}
            {generateRow(false, "customStyle", "Object", "{}")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(
              false,
              "active",
              "State display selected or none"
            )}
            {generateExplainRow(
              false,
              "disabled",
              "State display setable for RadioButton"
            )}
            {generateExplainRow(
              false,
              "customStyle",
              "You can custom RadioButton with it"
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
            # Radio Button
          </FontText.Heading2>
          <View style={{ marginTop: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <RadioButton customStyle={{ marginRight: 12 }} />
              <FontText.Body1>Active:true ,Disable: false</FontText.Body1>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 12 }}>
              <RadioButton active={true} customStyle={{ marginRight: 12 }} />
              <FontText.Body1>Active:true ,Disable: false</FontText.Body1>
            </View>

            <View style={{ flexDirection: "row" }}>
              <RadioButton disabled={true} customStyle={{ marginRight: 12 }} />
              <FontText.Body1>Active:false ,Disable: true</FontText.Body1>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 12 }}>
              <RadioButton
                active={true}
                disabled={true}
                customStyle={{ marginRight: 12 }}
              />
              <FontText.Body1>Active:true ,Disable: true</FontText.Body1>
            </View>
          </View>

          <Markdown>{`
           <RadioButton
           active={true}
           disabled={true}
           customStyle={{ marginRight: 12 }}
         />
              `}</Markdown>

          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
