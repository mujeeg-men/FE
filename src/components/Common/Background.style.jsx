import styled from "styled-components";
import backgroundImage from "@assets/images/background-image.jpg";

export const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
