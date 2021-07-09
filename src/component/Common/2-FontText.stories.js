import React from "react";
import { storiesOf } from "@storybook/react-native";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText } from "../../component";
import { View } from "react-native";
import { styles, generateRow } from "./styleCommon";
const buttonStories = storiesOf("FontText", module);

buttonStories.add("All", () => (
  <StoryContainer
    child={
      <View>
        <FontText.Heading2 style={{ marginBottom: 12 }}>
          #Import
        </FontText.Heading2>
        <Markdown>{`
            import { FontText } from 'pharmacity-component-kits'
            `}</Markdown>
        <FontText.Heading2 style={{ marginVertical: 12 }}>
          #Usage
        </FontText.Heading2>
        <View style={[styles.table, { marginBottom: 12 }]}>
          {generateRow(true, "Name", "FontSize", "LineHeight")}
          {generateRow(false, "Heading1", "32px", "42px")}
          {generateRow(false, "Heading2", "28px", "36px")}
          {generateRow(false, "Heading3", "24px", "32px")}
          {generateRow(false, "Heading4", "17px", "22px")}
          {generateRow(false, "Heading5", "14px", "18px")}
          {generateRow(false, "Button1", "17px", "22px")}
          {generateRow(false, "Button2", "13px", "22px")}
          {generateRow(false, "Caption1", "12px", "16px")}
          {generateRow(false, "Caption2", "11px", "13px")}
          {generateRow(false, "Body1", "15px", "22px")}
          {generateRow(false, "Body2", "14px", "24px")}
          {generateRow(false, "Body3", "12px", "18px")}
          {generateRow(false, "SmallText", "11px", "13px")}
        </View>

        <Markdown>{`
        <FontText.Heading2 style={{ marginVertical: 12 }}>
        #Color
      </FontText.Heading2>
            `}</Markdown>
        <View style={{ height: 56 }} />
      </View>
    }
  />
));
