import styled from "styled-components";

export const Container = styled.div`
  background-image: url(/static/jetpack.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 75% 110px;
  background-size: 30%;

  @media all and (max-width: 1440px) {
    background-position: 80% 110px;
  }

  @media all and (max-width: 1024px) {
    background-image: url(/static/jetpack.svg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 125% 110px;
    background-size: 50%;
  }

  @media all and (max-width: 768px) {
    background-image: none;
    padding: 0 20px;
  }
`;

export const ContainerInfos = styled.div`
  width: 100%;
  max-width: 540px;
  margin-top: 40px;

  @media all and (max-width: 768px) {
    width: 100%;
    max-width: 540px;
    margin-top: 40px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 54px;
  color: #0c0c0c;
`;

export const TitleWithStrong = styled.strong``;

export const TitleWithUnderline = styled.span`
  border-bottom: 8px solid #ffce0b;
`;

export const SubTitle = styled.h2`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  margin-top: 24px;
  color: #0c0c0c;
`;

export const SubTitleWithStrong = styled.strong``;

export const ContainerPlatforms = styled.div`
  width: 100%;
  max-width: 386px;
  margin-top: 16px;

  @media all and (max-width: 768px) {
    margin: 16px auto 0;
  }
`;

export const Platforms = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlatformParagraph = styled.p`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
`;

export const Icons = styled.div`
  margin-left: 16px;
`;
