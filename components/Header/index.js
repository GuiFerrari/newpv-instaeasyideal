import React, { Component } from "react";

import {
  Container,
  Content,
  ContainerHeader,
  ContainerLogo,
  Logo,
  Menu,
  ContainerItems,
  Item,
  Link
} from "./styles";

export default class Header extends Component {
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
                  <Link>Planos</Link>
                  <Link>Blog</Link>
                  <Link>Login</Link>
                </Item>
              </ContainerItems>
            </Menu>
          </ContainerHeader>
        </Content>
      </Container>
    );
  }
}
