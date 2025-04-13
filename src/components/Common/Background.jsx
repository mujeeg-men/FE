import Header from "./Header/Header";
import { CommonLayout } from "./Common.style";
import { BackgroundContainer } from "./Background.style";

const Background = ({ children }) => {
  
  return (
    <BackgroundContainer>
      <Header />
      <CommonLayout>{children}</CommonLayout>
    </BackgroundContainer>
  );
};

export default Background;
