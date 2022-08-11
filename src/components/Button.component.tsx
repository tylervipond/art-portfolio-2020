import * as React from "react";
import styled, { StyledProps } from "styled-components";
import { Typography } from "./Typography.component";

const ButtonText = styled(Typography).attrs({
  as: "button",
  type: "button",
  variant: "interaction",
})``;
ButtonText.displayName = "ButtonText";

const ButtonLayout = styled("button")`
  padding: ${({ theme }) =>
    `${theme.spacing[0] / 16}rem ${theme.spacing[1] / 16}rem`};
  border: 0.125rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadii[1] / 16}rem;
  margin: 0;
  outline: none;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.spacing[1] / 16}rem;
  transition: border 0.5s, filter 0.5s, background 0.5s;
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: 0;
    border-radius: ${({ theme }) => theme.borderRadii[1] / 16}rem;
    opacity: 0;
    background: linear-gradient(
      99.71deg,
      #00d6e3 0%,
      rgba(0, 214, 227, 0) 57.3%
    );
    transition: opacity 0.5s;
  }

  &:focus {
    border: 2px solid #00d6e3;
    filter: drop-shadow(0px 0px 5px #00d6e3);
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      99.71deg,
      #00d6e3 0%,
      rgba(0, 214, 227, 0) 57.3%
    );
    border: 2px solid #00d6e3;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &::after {
      opacity: 1;
    }
  }
`;
ButtonLayout.displayName = "ButtonLayout";

export interface ButtonProps extends StyledProps<any> {
  as?: "button" | "a";
  children?: string;
  icon?: React.ReactComponentElement<any>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  as,
  icon,
  ...props
}) => (
  <ButtonLayout as={as ? as : "button"} {...props}>
    {children ? (
      <Typography as="span" variant="interaction">
        {children}
      </Typography>
    ) : null}
    {icon ? icon : null}
  </ButtonLayout>
);
