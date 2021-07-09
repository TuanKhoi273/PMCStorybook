import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Avatar from "./Avatar";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { styles, generateRow, generateExplainRow } from "./styleCommon";

import { ButtonState, ButtonType } from "../../component";

const avatarStories = storiesOf("Avatar", module);

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
        import { Avatar } from 'pharmacity-component-kits'
        `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "size", "Double", "48.0")}
            {generateRow(false, "rounded", "boolean", "false")}
            {generateRow(false, "name", "String", "'avatar'")}
            {generateRow(false, "onPress", "Function", "null")}
            {generateRow(false, "customStyle", "Object", "{}")}
            {generateRow(false, "image", "String", "''")}
            {generateRow(false, "customTextStyle", "Object", "{}")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(false, "size", "Size of Avatar")}
            {generateExplainRow(
              false,
              "rounded",
              "if you want avatar type Round, You can set it True"
            )}
            {generateExplainRow(
              false,
              "name",
              "If image props empty, Avatar get 2 first letter to create Avatar"
            )}
            {generateExplainRow(false, "onPress", "Function when click Avatar")}
            {generateExplainRow(
              false,
              "customStyle",
              "You can custom Avatar with it"
            )}
            {generateExplainRow(false, "image", "Image url for Avatar")}
            {generateExplainRow(
              false,
              "customTextStyle",
              "You can custom text of avatar with it"
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
            # Avatar Default
          </FontText.Heading2>
          <View style={{ flexDirection: "row" }}>
            <Avatar />
            <Avatar
              customTextStyle={{ fontSize: 25 }}
              customStyle={{ marginHorizontal: 8 }}
            />
          </View>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Avatar Round
          </FontText.Heading2>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <Avatar rounded={true} />
            <Avatar
              rounded={true}
              name="Khoi"
              customStyle={{ marginHorizontal: 8 }}
            />
          </View>

          <Markdown>{`
            <Avatar
            rounded={true}
            name="Khoi"
            customStyle={{ marginHorizontal: 8 }}
          />
              `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Avatar with Image
          </FontText.Heading2>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              image={
                "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              }
            />
            <Avatar
              rounded={true}
              name="Khoi"
              image={
                "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              }
              customStyle={{ marginHorizontal: 8 }}
            />
          </View>
          <Avatar
            rounded={true}
            size={100}
            name="Khoi"
            image={
              "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            }
            customStyle={{ marginVertical: 8 }}
          />
          <Markdown>{`
            <Avatar
            rounded={true}
            size={100}
            name="Khoi"
            image={
              "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            }
            customStyle={{ marginVertical: 8 }}
          />
              `}</Markdown>

          <FontText.Heading3
            style={{ marginVertical: 12, color: ColorApp.SEMATIC.green }}
          >
            If no image URL avatar render with 2 first letter of name props.
          </FontText.Heading3>
          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
