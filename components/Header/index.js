import React, { Component } from "react";
import Link from "next/link";
import MenuLateral from "../Menu/index";

import {
  Container,
  Content,
  ContainerHeader,
  ContainerLogo,
  Logo,
  Menu,
  ContainerItems,
  Item,
  ContainerIcon,
  Bar,
  ContainerMenuActive
} from "./styles";

export default class Header extends Component {
  state = {
    showMenu: false
  };

  changeClass = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  closeMenu = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container>
        <Content className="container">
          <ContainerHeader>
            <ContainerLogo>
              <Logo src="/static/logo-completa.png" />
            </ContainerLogo>
            <Menu>
              <ContainerItems>
                <Item>
                  <Link href="/users">
                    <a className="link">Planos</a>
                  </Link>
                </Item>
                <Item>
                  <Link href="#">
                    <a className="link">Blog</a>
                  </Link>
                </Item>
                <Item>
                  <Link href="#">
                    <a className="link">Login</a>
                  </Link>
                </Item>
              </ContainerItems>
            </Menu>
            {/* Icone menu aqui */}
            <ContainerIcon onClick={this.changeClass}>
              <Bar />
              <Bar />
              <Bar />
            </ContainerIcon>
          </ContainerHeader>
        </Content>
        <MenuLateral
          state={this.state.showMenu}
          handleCloseMenu={() => this.setState({ showMenu: false })}
        />
        <ContainerMenuActive
          className={this.state.showMenu === false && "hidden"}
          onClick={() => this.setState({ showMenu: false })}
        />
      </Container>
    );
  }
}
