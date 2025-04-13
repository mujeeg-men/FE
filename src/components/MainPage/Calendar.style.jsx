import COLOR from "@/constants/color";
import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 50%;
`;

export const CalendarWeekWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const CalendarDateWrapper = styled.div`
  /* padding: 10px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;

    &:hover {
      background-color: ${COLOR.defalutColor};
      color: white;
    }
  }
`;

export const CalendarArrow = styled.button`
  border: none;
  background-color: inherit;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: white;
    /* color: white; */
  }
`;
