import React, { Component } from "react";
import Button from "../Button/index";
import { FaAndroid, FaApple } from "react-icons/fa";
import {
  Container,
  ContainerInfos,
  Title,
  TitleWithStrong,
  TitleWithUnderline,
  SubTitle,
  SubTitleWithStrong,
  ContainerPlatforms,
  Platforms,
  PlatformParagraph,
  Icons
} from "./styles";

export default class DobraPrincipal extends Component {
  render() {
    return (
      <Container>
        <div className="container">
          <ContainerInfos>
            <Title>
              Não{" "}
              <TitleWithUnderline>
                consegue <TitleWithStrong>divulgar</TitleWithStrong>{" "}
              </TitleWithUnderline>
              <TitleWithStrong>seu negócio </TitleWithStrong>e tem dificuldades
              para conseguir mais clientes?
            </Title>
            <SubTitle>
              Descubra o <SubTitleWithStrong>exato método </SubTitleWithStrong>
              para crescer no Instagram e consquistar mais clientes
            </SubTitle>
            <Button text="Quero meu Instaeasy" />
            <ContainerPlatforms>
              <Platforms>
                <PlatformParagraph>
                  Disponível nas plataformas:
                </PlatformParagraph>
                <Icons>
                  <FaApple size={28} color="#828282" />
                  <FaAndroid size={28} color="#828282" />
                </Icons>
              </Platforms>
            </ContainerPlatforms>
          </ContainerInfos>
        </div>
      </Container>
    );
  }
}
