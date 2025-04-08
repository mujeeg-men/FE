import styled from "styled-components";

export const CalendarContainer = styled.div``;

export const CalendarWeekWrapper = styled.div`
  display: flex;
`;

export const CalendarDateWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:hover{
    background-color: tomato;
  }
`;
