import styled from "styled-components";
import { layout } from "../../constants/layout";

export const HeaderContainer = styled.header`
  /* position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px 20px' */
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px ${layout.HORIZONTAL_LAYOUT}px;
  backdrop-filter: blur(15px); // 배경 흐림 효과
`;
