import COLOR from "@/constants/color";
import { layout } from "@/constants/layout";
import styled from "styled-components";

export const ProfileNavigationContainer = styled.div`
  flex: 0.5;
`;

export const ProfileNavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center
`;

export const ProfileNavigationItem = styled.div`
  padding: 5px;
  &:hover {
    color: ${COLOR.defalutColor};
    cursor: pointer;
  }
`;
