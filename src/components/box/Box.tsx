import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { GnuiContainer } from "../container";
import { space, SpaceProps } from "styled-system";

type BoxProps = {
  dark?: boolean;
  minHeight?: string;
  minWidth?: string;
  border?: string;
  color?: string;
  backgroundColor?: string;
  radius?: "small" | "medium" | "large";
  spacing?:
    | "spacing00"
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";
  innerSpacing?:
    | "spacing00"
    | "spacing01"
    | "spacing02"
    | "spacing03"
    | "spacing04"
    | "spacing05"
    | "spacing06"
    | "spacing07"
    | "spacing08";
  shadow?: "shadow00" | "shadow01" | "shadow02" | "shadow03" | "shadow04";
  onClick?: (e: any) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  boxStyle?: "lightGrey" | "grey";
};

const changeBoxStyle = (boxStyle: string) => {
  switch (boxStyle) {
    case "lightGrey":
      return `
      background: ${theme.color.background.ui03};
      border: 1px solid ${theme.color.border.border01};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
    case "grey":
      return `
      background: ${theme.color.background.ui04};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
  }
};

const StyledBox = styled(GnuiContainer)<BoxProps & SpaceProps>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.spacing.spacing04};
  border-radius: ${theme.radius.default};
  color: ${theme.color.text.text01};
  background: ${theme.color.background.ui01};
  font-weight: ${theme.fontWeights.regular};
  box-shadow: ${theme.shadow.shadow02};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  ${({ boxStyle }) =>
    boxStyle &&
    css`
      ${changeBoxStyle(boxStyle)}
    `}
  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.color.background.ui05};
      color: ${theme.color.text.text04};
    `}
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${theme.radius[radius]};
    `}

  ${({ innerSpacing }) =>
    innerSpacing &&
    css`
      padding: ${theme.spacing[innerSpacing]};
    `}

  ${({ spacing }) =>
    spacing &&
    css`
      margin-bottom: ${theme.spacing[spacing]};
    `}

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${theme.shadow[shadow]};
    `}
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
  ${({ border }) =>
    border &&
    css`
      border: ${theme.borders[border] || border};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
     ${space}
`;

export const Box: FunctionComponent<BoxProps & SpaceProps> = ({
  children,
  ...props
}) => <StyledBox {...props}>{children}</StyledBox>;
