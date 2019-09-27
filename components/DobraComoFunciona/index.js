import React, { Component } from "react";
import {
  Container,
  ContainerVideo,
  TitleFold,
  TitleFoldBold,
  Description,
  DescriptionBold,
  FrameVideo,
  ContainerBenefits,
  Cards,
  Item,
  Icon,
  CardTitle,
  CardTitlePurple,
  CardDescription,
  CardDescriptionBold
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
        <ContainerBenefits>
          <div className="container">
            <Cards>
              <Item>
                <Icon src="/static/icon-interacoes.png" />
                <CardTitle>
                  Interações <CardTitlePurple>Automáticas</CardTitlePurple>
                </CardTitle>
                <CardDescription>
                  O Instaeasy realiza interações de{" "}
                  <CardDescriptionBold>
                    seguir, curtir e deixar de seguir{" "}
                  </CardDescriptionBold>
                  automaticamente alcançando seu público alvo
                </CardDescription>
              </Item>
              <Item>
                <Icon src="/static/icon-direct.png" />
                <CardTitle>
                  <CardTitlePurple>Direct </CardTitlePurple>de Boas Vindas
                </CardTitle>
                <CardDescription>
                  Envie <DescriptionBold>Directs automáticos </DescriptionBold>
                  com boas-vindas e informações personalizadas sobre o seu
                  negócio para seus novos seguidores, criando relações ainda
                  mais próximas com eles
                </CardDescription>
              </Item>
              <Item>
                <Icon src="/static/icon-potenciais.png" />
                <CardTitle>
                  Interaja apenas com{" "}
                  <CardTitlePurple>potenciais clientes</CardTitlePurple>
                </CardTitle>
                <CardDescription>
                  Se você não quiser seguir e curtir perfis de empresas, basta
                  ativar o filtro comercial. Assim você pode{" "}
                  <DescriptionBold>
                    atrair mais perfis de potenciais clientes
                  </DescriptionBold>
                </CardDescription>
              </Item>
              <Item>
                <Icon src="/static/icon-potencialize.png" />
                <CardTitle>
                  <CardTitlePurple>Potencialize</CardTitlePurple> seus
                  resultados
                </CardTitle>
                <CardDescription>
                  O Instaeasy te ajuda a{" "}
                  <CardDescriptionBold>
                    melhorar o alcance e o retorno{" "}
                  </CardDescriptionBold>
                  das hashtags, perfis e localizações. Não perca tempo com o que
                  não te traz resultados
                </CardDescription>
              </Item>
            </Cards>
          </div>
        </ContainerBenefits>
      </Container>
    );
  }
}
