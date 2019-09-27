import styled from "styled-components";
import Colors from "~/utils/colors";

export const ButtonCTA = styled.button`
  background: ${Colors.Green};
  padding: 16px 48px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #fff;
  text-transform: uppercase;
  margin-top: 48px;
  transition: all ease-in-out 0.3s;

  &:hover {
    transition: all ease-in-out 0.3s;
    background: ${Colors.GreenHover};
    cursor: pointer;
  }

  @media all and (max-width: 425px) {
    padding: 16px 24px;
    font-size: 18px;
    line-height: 24px;
  }
`;
