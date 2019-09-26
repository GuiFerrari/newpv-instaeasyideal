import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 75px;
  box-shadow: 0 4px 4px #00000025;

  @media all and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div``;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
`;

export const ContainerLogo = styled.div``;

export const Logo = styled.img``;

export const Menu = styled.div``;

export const ContainerItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  margin-left: 32px;

  &:first-child {
    margin-left: 0;
  }
`;

export const ContainerIcon = styled.a`
  width: 32px;
  height: 24px;
  position: relative;
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: #333333;
  left: 0;

  &:last-child {
    bottom: 0;
  }

  &:nth-child(2) {
    top: 11px;
  }

  &:nth-child(3) {
    top: 11px;
  }

  &:last-child {
    bottom: 0;
  }
`;
