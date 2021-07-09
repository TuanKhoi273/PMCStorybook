import React from "react";
import { storiesOf } from "@storybook/react-native";
import Markdown from "react-native-markdown-display";
import StoryContainer from "./StoryContainer";
import { FontText, ColorApp } from "..";
import { View } from "react-native";
import { styles, generateRow, generateExplainRow } from "./styleCommon";
import Input from "./Input";

const inputStories = storiesOf("Input", module);

inputStories
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
            import { Input } from 'pharmacity-component-kits'
            `}</Markdown>
          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Props
          </FontText.Heading2>
          <View style={styles.table}>
            {generateRow(true, "Name", "Type", "Default")}
            {generateRow(false, "onPress", "Function", "null")}
            {generateRow(false, "value", "String", "''")}
            {generateRow(false, "customStyle", "Object", "Null")}
            {generateRow(false, "enableRightIcon", "boolean", "false")}
            {generateRow(false, "iconRightName", "String", "x")}

            {generateRow(false, "iconRightColor", "String", "black")}
            {generateRow(false, "enableLeftIcon", "boolean", "false")}
            {generateRow(false, "iconLeftName", "String", "search")}
            {generateRow(false, "iconLeftColor", "string", "black")}
            {generateRow(false, "editable", "boolean", "true")}
            {generateRow(false, "onChangeText", "Function", "null")}
            {generateRow(false, "placeholder", "String", "'")}
            {generateRow(false, "customLeading", "Component", "null")}
            {generateRow(false, "customTrailing", "Component", "null")}

            {generateRow(false, "keyboardType", "String", "default")}
            {generateRow(false, "isTextArea", "boolean", "false")}

            {generateRow(false, "placeholderStyle", "Object", "null")}
            {generateRow(false, "onRightClick", "Function", "null")}
            {generateRow(false, "secureTextEntry", "boolean", "false")}
            {generateRow(
              false,
              "inputColor",
              "String",
              "ColorApp.PRIMARY.blue_04"
            )}
            {generateRow(false, "topLabel", "String", "''")}
            {generateRow(false, "containerStyle", "Object", "{}")}
          </View>

          <View style={[styles.table, { marginTop: 16, marginBottom: 56 }]}>
            {generateExplainRow(true, "Name", "Explain")}
            {generateExplainRow(false, "onPress", "Function when click Input")}
            {generateExplainRow(false, "value", "Value of Input")}
            {generateExplainRow(false, "customStyle", "Style custom for Input")}

            {generateExplainRow(
              false,
              "enableRightIcon",
              "On or off right icon"
            )}
            {generateExplainRow(
              false,
              "iconRightName",
              "Icon name of right icon, use Feather Icon"
            )}

            {generateExplainRow(false, "iconRightColor", "Color of right icon")}
            {generateExplainRow(false, "enableLeftIcon", "On or off left icon")}
            {generateExplainRow(
              false,
              "iconLeftName",
              "Icon name of left icon, use Feather Icon"
            )}
            {generateExplainRow(false, "iconLeftColor", "Color of left icon")}
            {generateExplainRow(false, "editable", "Set edittable for input")}
            {generateExplainRow(
              false,
              "onChangeText",
              "Function when change text input"
            )}
            {generateExplainRow(false, "placeholder", "Placeholder of Input")}
            {generateExplainRow(
              false,
              "customLeading",
              "If Use don't want use icon feature for left, you can you it to custom"
            )}
            {generateExplainRow(
              false,
              "customTrailing",
              "If Use don't want use icon feature for right, you can you it to custom"
            )}

            {generateExplainRow(
              false,
              "keyboardType",
              "Keyboard type of input"
            )}
            {generateExplainRow(
              false,
              "isTextArea",
              "If true, it's like TextArea"
            )}

            {generateExplainRow(
              false,
              "placeholderStyle",
              "Custom placeholder style "
            )}
            {generateExplainRow(
              false,
              "onRightClick",
              "Function when click right button, often reset text"
            )}
            {generateExplainRow(
              false,
              "secureTextEntry",
              "Secure text like Password input"
            )}
            {generateExplainRow(
              false,
              "inputColor",
              "Color of bottom line, icon, top label of input"
            )}
            {generateExplainRow(false, "topLabel", "value of top label.")}
            {generateExplainRow(
              false,
              "containerStyle",
              "Use can't custom input with it, example margin with another component"
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
            # Text Input Default
          </FontText.Heading2>

          <Input placeholder={"Your Phone Number"} />

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Text Input With Close Button
          </FontText.Heading2>

          <Input placeholder={"Your Phone Number"} enableRightIcon={true} />
          <Input
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            iconRightColor={"red"}
          />

          <Markdown>{`
         <Input
         placeholder={"Your Phone Number"}
         enableRightIcon={true}
         iconRightColor={"red"}
       />
              `}</Markdown>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Text Input With Left Icon
          </FontText.Heading2>
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
            iconLeftName={"activity"}
            enableRightIcon={true}
            enableLeftIcon={true}
            value={"abc"}
            secureTextEntry={true}
            onRightClick={() => {
              alert("abc");
            }}
          />

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Text Input With Top Label
          </FontText.Heading2>
          <Input
            // containerStyle={{ marginTop: 16 }}
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            enableLeftIcon={true}
            onRightClick={() => {
              alert("abc");
            }}
            // keyboardType={"password"}
            topLabel="test"
          />

          <Markdown>{`
          <Input
          // containerStyle={{ marginTop: 16 }}
          placeholder={"Your Phone Number"}
          enableRightIcon={true}
          enableLeftIcon={true}
          onRightClick={() => {
            alert("abc");
          }}
          // keyboardType={"password"}
          topLabel="test"
        />
              `}</Markdown>

          <FontText.Heading2
            style={{ marginVertical: 12, color: ColorApp.PRIMARY.blue_05 }}
          >
            # Text Input Custom
          </FontText.Heading2>

          <Input
            containerStyle={{
              marginVertical: 16,
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
            placeholder={"Your Phone Number"}
            enableRightIcon={true}
            enableLeftIcon={true}
            onRightClick={() => {
              alert("abc");
            }}
            topLabel="test"
          />

          <Markdown>{`
          <Input
          containerStyle={{
            marginVertical: 16,
            borderWidth: 1,
            borderRadius: 4,
            paddingHorizontal: 16,
          }}
          placeholder={"Your Phone Number"}
          enableRightIcon={true}
          enableLeftIcon={true}
          onRightClick={() => {
            alert("abc");
          }}
          topLabel="test"
        />
              `}</Markdown>
          <View style={{ height: 56 }} />
        </View>
      }
    />
  ));
