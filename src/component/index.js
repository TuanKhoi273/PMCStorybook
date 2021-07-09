import styled from "styled-components/native";
import ColorApp from "../colors/index";
export { default as Button } from "../component/Common/Button";
export { default as RadioButton } from "../component/Common/RadioButton";
export { default as FloatButton } from "../component/Common/FloatButton";
export { default as TextButton } from "../component/Common/TextButton";
export { default as Input } from "../component/Common/Input";
export { default as Label } from "../component/Common/Label";
export { default as Avatar } from "../component/Common/Avatar";

export { ColorApp };

export const ButtonType = {
  DEFAULT: 0,
  GHOST: 1,
};

export const ButtonState = {
  DEFAULT: 0,
  ACTIVE: 1,
  DISABLE: 2,
};
export const FontText = {
  Heading1: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 32px;
    line-height: 42px;
  `,
  Heading2: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 28px;
    line-height: 36px;
  `,
  Heading3: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 24px;
    line-height: 32px;
  `,
  Heading4: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 17px;
    line-height: 22px;
  `,
  Heading5: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 14px;
    line-height: 18px;
  `,

  Button1: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 17px;
    line-height: 22px;
  `,
  Button2: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 13px;
    line-height: 20px;
  `,
  Caption1: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 12px;
    line-height: 16px;
  `,
  Caption2: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 11px;
    line-height: 13px;
  `,
  Body1: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 15px;
    line-height: 22px;
  `,
  Body2: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 14px;
    line-height: 24px;
  `,
  Body3: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 12px;
    line-height: 18px;
    text-align-vertical: center;
    justify-content: center;
    align-items: center;
  `,
  SmallText: styled.Text`
    color: ${ColorApp.NEUTRAL.gray_06};
    font-size: 11px;
    line-height: 13px;
  `,
};
