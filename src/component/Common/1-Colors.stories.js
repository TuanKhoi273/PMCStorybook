import React from "react";
import { storiesOf } from "@storybook/react-native";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontText, ColorApp } from "..";
import { View, Linking, TouchableOpacity } from "react-native";
import { styles, generateRow, generateColor } from "./styleCommon";
import { LinearGradient } from "expo-linear-gradient";
const buttonStories = storiesOf("Colors", module);

buttonStories.add("All", () => (
  <StoryContainer
    child={
      <View>
        <FontText.Heading2 style={{ marginBottom: 12 }}>
          #Import
        </FontText.Heading2>
        <Markdown>{`
            import { ColorApp } from 'pharmacity-component-kits'
            `}</Markdown>
        <FontText.Heading2 style={{ marginVertical: 12 }}>
          #Color
        </FontText.Heading2>
        <FontText.Heading5 style={{ marginVertical: 12 }}>
          1.Primary
        </FontText.Heading5>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
        >
          {generateColor(ColorApp.PRIMARY.blue_01, "blue_01")}
          {generateColor(ColorApp.PRIMARY.blue_02, "blue_02")}
          {generateColor(ColorApp.PRIMARY.blue_03, "blue_03")}
          {generateColor(ColorApp.PRIMARY.blue_04, "blue_04")}
          {generateColor(ColorApp.PRIMARY.blue_05, "blue_05")}
          {generateColor(ColorApp.PRIMARY.blue_06, "blue_06")}
        </View>

        <Markdown>{`
            color: {ColorApp.PRIMARY.blue_01}
         
            `}</Markdown>

        <FontText.Heading5 style={{ marginVertical: 12 }}>
          2.Neutral
        </FontText.Heading5>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
        >
          {generateColor(ColorApp.NEUTRAL.gray_01, "gray_01")}
          {generateColor(ColorApp.NEUTRAL.gray_02, "gray_02")}
          {generateColor(ColorApp.NEUTRAL.gray_03, "gray_03")}
          {generateColor(ColorApp.NEUTRAL.gray_04, "gray_04")}
          {generateColor(ColorApp.NEUTRAL.gray_05, "gray_05")}
          {generateColor(ColorApp.NEUTRAL.gray_06, "gray_06")}
          {generateColor(ColorApp.NEUTRAL.gray_07, "gray_07")}
          {generateColor(ColorApp.NEUTRAL.geekblue, "geekblue")}
          {generateColor(ColorApp.NEUTRAL.geekblue_01, "geekblue_01")}
        </View>
        <Markdown>{`
            color: {ColorApp.NEUTRAL.gray_01}
         
            `}</Markdown>

        <FontText.Heading5 style={{ marginVertical: 12 }}>
          3.Gradient
        </FontText.Heading5>

        <LinearGradient
          colors={ColorApp.GRADIENT.blue}
          style={{ with: 200, height: 200, marginBottom: 16 }}
        ></LinearGradient>

        <Markdown>{`
            <LinearGradient
            colors={ColorApp.GRADIENT.blue}
            style={{ with: 200, height: 200 }}
          ></LinearGradient>
         
            `}</Markdown>

        <FontText.Heading5 style={{ marginVertical: 12 }}>
          4.Sematic
        </FontText.Heading5>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
        >
          {generateColor(ColorApp.SEMATIC.green, "green")}
          {generateColor(ColorApp.SEMATIC.megeta, "megeta")}
          {generateColor(ColorApp.SEMATIC.yellow, "yellow")}
        </View>
        <Markdown>{`
            color: {ColorApp.SEMATIC.green}
         
            `}</Markdown>

        <FontText.Heading5 style={{ marginVertical: 12 }}>
          5.Accent
        </FontText.Heading5>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
        >
          {generateColor(ColorApp.ACCENT.gray, "gray")}
          {generateColor(ColorApp.ACCENT.gold, "gold")}
          {generateColor(ColorApp.ACCENT.orange, "orange")}
          {generateColor(ColorApp.ACCENT.mageta_02, "mageta_02")}
          {generateColor(ColorApp.ACCENT.mageta_03, "mageta_03")}
          {generateColor(ColorApp.ACCENT.green_02, "green_02")}
          {generateColor(ColorApp.ACCENT.purple_01, "purple_01")}
          {generateColor(ColorApp.ACCENT.purple_02, "purple_02")}
          {generateColor(ColorApp.ACCENT.purple_03, "purple_03")}
        </View>

        <Markdown>{`
            color: {ColorApp.ACCENT.gray}
         
            `}</Markdown>

        <View style={{ height: 56 }} />
      </View>
    }
  />
));
