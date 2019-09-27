import React, { Component } from "react";
import {
  Container,
  ContainerVideo,
  TitleFold,
  TitleFoldBold,
  Description,
  DescriptionBold,
  FrameVideo
} from "./styles";

export default class DobraComoFunciona extends Component {
  render() {
    return (
      <Container>
        <ContainerVideo>
          <div className="container">
            <TitleFold>
              Como o <TitleFoldBold>Instaeasy</TitleFoldBold> Funciona?
            </TitleFold>
            <Description>
              Utilize{" "}
              <DescriptionBold>
                perfis, localizações e hashtags{" "}
              </DescriptionBold>
              para encontrar seu público e o Instaeasy interage{" "}
              <DescriptionBold>automaticamente</DescriptionBold>
            </Description>
            <FrameVideo>
              <iframe
                src="https://player.vimeo.com/video/177593675?"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              ></iframe>
            </FrameVideo>
          </div>
        </ContainerVideo>
      </Container>
    );
  }
}
