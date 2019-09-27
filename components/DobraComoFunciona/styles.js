import styled from "styled-components";
import Colors from "~/utils/colors";

export const Container = styled.div``;

export const ContainerVideo = styled.div`
  padding: 40px 0;
  background: ${Colors.Secondary};
`;

export const TitleFold = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  line-height: 49px;
  color: #fff;
  font-weight: normal;
  text-align: center;
`;

export const TitleFoldBold = styled.span`
  border-bottom: 8px solid ${Colors.Primary};
  font-weight: bold;
`;

export const Description = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  font-weight: normal;
  text-align: center;
  margin: 32px auto;
  width: 100%;
  max-width: 680px;
`;

export const DescriptionBold = styled.span`
  font-weight: bold;
`;

export const FrameVideo = styled.div`
  text-align: center;

  iframe {
    width: 680px;
    height: 380px;

    @media all and (max-width: 768px) {
      width: 100%;
      max-width: 680px;
      height: auto;
    }
  }
`;

export const ContainerBenefits = styled.div`
  padding: 80px 0;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-column-gap: 16px;
  grid-template-rows: 2fr 2fr;
  grid-row-gap: 54px;

  @media all and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Item = styled.div`
  text-align: center;

  @media all and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Icon = styled.img`
  margin-bottom: 32px;
`;

export const CardTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  line-height: 38px;
  color: #0c0c0c;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const CardTitlePurple = styled.span`
  color: ${Colors.Secondary};
`;

export const CardDescription = styled.p`
  margin: 16px 0 0;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  line-height: 27px;
  color: #0c0c0c;
  font-weight: normal;
  text-align: center;
`;

export const CardDescriptionBold = styled.span`
  font-weight: bold;
`;
