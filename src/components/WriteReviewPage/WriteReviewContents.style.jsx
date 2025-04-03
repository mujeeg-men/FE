import styled from "styled-components";

export const ContentsInput = styled.textarea`
  height: 300px; /* 높이 크게 설정 */
  padding: 10px; /* 내부 여백 제거 */
  font-size: 16px;
  overflow-wrap: break-word; /* 줄바꿈 적용 */
  white-space: pre-wrap; /* 입력한 내용 그대로 줄바꿈 처리 */
  resize: none; /* 크기 조절 방지 */
  overflow: auto
`;
