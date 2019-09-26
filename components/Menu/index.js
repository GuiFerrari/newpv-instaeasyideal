import React, { Component } from "react";
import Link from "next/link";
import {
  Container,
  Top,
  ContainerClose,
  CloseMenu,
  Bar,
  ContainerItems,
  Item,
  LinkItem,
  Bottom,
  FooterMenu,
  TextFooterMenu
} from "./styles";

export default class Menu extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Container className={this.props.state ? "showMenu" : "hiddenMenu"}>
        <Top>
          <ContainerClose>
            <CloseMenu onClick={() => this.props.handleCloseMenu()}>
              <Bar />
              <Bar />
            </CloseMenu>
            <ContainerItems>
              <Item>
                <Link href="/users">
                  <LinkItem>Planos</LinkItem>
                </Link>
              </Item>
              <Item>
                <Link href="#">
                  <LinkItem>Blog</LinkItem>
                </Link>
              </Item>
              <Item>
                <Link href="#">
                  <LinkItem>Login</LinkItem>
                </Link>
              </Item>
            </ContainerItems>
          </ContainerClose>
        </Top>
        <Bottom>
          <FooterMenu>
            <TextFooterMenu>INSTAEASY - v0.1</TextFooterMenu>
          </FooterMenu>
        </Bottom>
      </Container>
    );
  }
}
