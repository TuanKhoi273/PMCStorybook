import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import FloatButton from "./FloatButton";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "../../component";
import { styles, generateRow, generateExplainRow } from "./styleCommon";

import { ButtonState, ButtonType } from "../../component";

const FloatButtonStories = storiesOf("FloatButton", module);

// lets storybook know to show the knobs addon for this story
FloatButtonStories.addDecorator(withKnobs);

// I use to boolean knob to set the disabled prop based on the knob state
// I use the action function to log every time the button gets called
FloatButtonStories.add("Import and Props", () => (
  <StoryContainer
    child={
      <View>
        <FontText.Heading2
          style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
        >
          # Import
        </FontText.Heading2>
        <Markdown>{`
        import { FloatButton } from 'pharmacity-component-kits'
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
          {generateRow(false, "iconColor", "String", "black")}
          {generateRow(false, "onPress", "Function", "null")}
          {generateRow(false, "customStyle", "Object", "{}")}
          {generateRow(false, "iconName", "String", "chevron-left")}
          {generateRow(false, "customIcon", "Component", "null")}
        </View>

        <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
          {generateExplainRow(true, "Name", "Explain")}
          {generateExplainRow(false, "size", "Size of FloatButton")}
          {generateExplainRow(
            false,
            "rounded",
            "if you want FloatButton type Round, You can set it True"
          )}
          {generateExplainRow(false, "iconColor", "Color of icon")}
          {generateExplainRow(
            false,
            "onPress",
            "Function when click FloatButton"
          )}
          {generateExplainRow(
            false,
            "customStyle",
            "You can custom FloatButton with it"
          )}
          {generateExplainRow(
            false,
            "iconName",
            "You can custom icon name with it, find icon name in https://feathericons.com"
          )}
          {generateExplainRow(
            false,
            "customIcon",
            "If U don't want use Feather Icon, You can custom icon component of button with it."
          )}
        </View>
      </View>
    }
  />
)).add("Example", () => (
  <StoryContainer
    child={
      <View>
        <FontText.Heading2
          style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
        >
          # Float Button Default
        </FontText.Heading2>
        <View style={{ flexDirection: "row" }}>
          <FloatButton rounded={false} />
          <FloatButton customStyle={{ marginHorizontal: 8 }} size={60} />
        </View>

        <FontText.Heading2
          style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
        >
          # Float Button Round
        </FontText.Heading2>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <FloatButton rounded={true} />
          <FloatButton
            rounded={true}
            customStyle={{ marginHorizontal: 8 }}
            size={60}
          />
        </View>

        <Markdown>{`
            <FloatButton
            rounded={true}
            customStyle={{ marginHorizontal: 8 }}
            size={60}
          />
              `}</Markdown>
        <FontText.Heading2
          style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
        >
          # FloatButton Custom Icon name
        </FontText.Heading2>
        <View style={{ flexDirection: "row" }}>
          <FloatButton
            iconName={"activity"}
            rounded={true}
            customStyle={{ margin: 8 }}
            size={60}
          />
        </View>

        <Markdown>{`
            <FloatButton
            iconName={"activity"}
            rounded={true}
            customStyle={{ marginHorizontal: 8 }}
            size={60}
          />
              `}</Markdown>
        <FontText.Heading3
          style={{ marginVertical: 12, color: ColorApp.SEMATIC.green }}
        >
          Icon name I use react-native-vector-icons/Feather you can get in link:
          #https://feathericons.com, and change with props iconName . If don't
          have icon You need you get custom with customIcon props
        </FontText.Heading3>
        <FontText.Heading2
          style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
        >
          # FloatButton custom Icon
        </FontText.Heading2>
        <View style={{ flexDirection: "row" }}>
          <FloatButton
            rounded={true}
            customStyle={{ marginHorizontal: 8, marginBottom: 16 }}
            size={60}
            customIcon={<FontText.Body1>{">"}</FontText.Body1>}
          />
        </View>

        <Markdown>{`
            <FloatButton
            rounded={true}
            customStyle={{ margin: 8 }}
            size={60}
            customIcon={<FontText.Body1>{">"}</FontText.Body1>}
          />
              `}</Markdown>

        <View style={{ height: 56 }} />
      </View>
    }
  />
));
