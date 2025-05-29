import styled from "styled-components";

export const BookCarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const BookCarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${props.currentIndex * 100}%`});
`;

export const BookCarouselWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BookCarouselItemWrapper = styled.div`
  /* width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer; */ width: 20%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;

  .image-wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .book-title {
    margin-top: 4px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
`;
