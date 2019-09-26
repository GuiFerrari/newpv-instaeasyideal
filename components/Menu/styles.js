import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;
  background: white;
  box-shadow: 4px 0 4px #00000025;
  padding: 25px 20px;
  box-sizing: border-box;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: 0.3s all;

  ${props =>
    props.className === "hiddenMenu" &&
    `
    left: -255px;
  `}

  @media all and (min-width: 425px) {
    display: none;
  }
`;

export const Top = styled.div``;

export const ContainerClose = styled.div`
  width: 100%;
  height: 24px;
`;

export const CloseMenu = styled.a`
  width: 32px;
  height: 24px;
  position: absolute;
  z-index: 2;
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: #333333;
  left: 0;
  top: 11px;

  &:first-child {
    transform: rotate(-45deg);
  }

  &:last-child {
    transform: rotate(45deg);
  }
`;

export const ContainerItems = styled.ul`
  position: relative;
  padding-top: 60px;
  width: 100%;
`;

export const Item = styled.li`
  margin-top: 10px;
`;

export const LinkItem = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  text-decoration: none;
`;

export const Bottom = styled.div`
  width: 100%;
`;

export const FooterMenu = styled.div`
  width: 100%;
`;

export const TextFooterMenu = styled.p`
  font-size: 12px;
  color: #999;
  text-align: center;
`;
