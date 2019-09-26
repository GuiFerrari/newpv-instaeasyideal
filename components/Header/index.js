import React, { Component } from "react";
import Link from "next/link";

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
  Bar
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
            <ContainerIcon
              onClick={() => {
                alert("Oi");
              }}
            >
              <Bar />
              <Bar />
              <Bar />
              <Bar />
            </ContainerIcon>
          </ContainerHeader>
        </Content>
      </Container>
    );
  }
}
