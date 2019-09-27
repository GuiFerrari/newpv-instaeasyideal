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
  margin: 32px 0;
`;

export const DescriptionBold = styled.span`
  font-weight: bold;
`;

export const FrameVideo = styled.div`
  text-align: center;
`;
