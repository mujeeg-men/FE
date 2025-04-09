import { bookData } from "@/assets/data/temp";
import {
  ArrowButton,
  BookCarouselContainer,
  BookCarouselItemWrapper,
  BookCarouselTrack,
  BookCarouselWrapper,
} from "./BookCarousel.style";
import { useState } from "react";
import { useNavigate } from "react-router";

const BookCarousel = () => {
  const splitIntoChunk = (arr, chunk) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunk) {
      result.push(arr.slice(i, i + chunk));
    }
    return result;
  };

  const [nowBookDataIndex, setNowBookDataIndex] = useState(0);
  const bookCarouselData = splitIntoChunk(bookData, 5);
  
  const navigate = useNavigate();

  const handlePlusBookDataIndex = () => {
    if (nowBookDataIndex < bookCarouselData.length - 1) {
      setNowBookDataIndex(nowBookDataIndex + 1);
    }
  };

  const handleMinusBookDataIndex = () => {
    if (nowBookDataIndex > 0) {
      setNowBookDataIndex(nowBookDataIndex - 1);
    }
  };

  return (
    <BookCarouselContainer>
      <ArrowButton
        onClick={handleMinusBookDataIndex}
        disabled={nowBookDataIndex === 0}
        style={{
          opacity: nowBookDataIndex === 0 ? 0.5 : 1,
          cursor: nowBookDataIndex === 0 ? "not-allowed" : "pointer",
          left: "10px",
        }}
      >
        ⬅️
      </ArrowButton>

      <BookCarouselTrack currentIndex={nowBookDataIndex}>
        {bookCarouselData.map((chunk, i) => (
          <BookCarouselWrapper key={i}>
            {chunk.map((book, idx) => (
              <BookCarouselItemWrapper
                key={idx}
                style={{ textAlign: "center" }}
                onClick={()=>{navigate(`/search/${book.id}`)}}
              >
                <img style={{ width: "200px" }} src={book.imageUrl} alt="" />
                <span>{book.title}</span>
              </BookCarouselItemWrapper>
            ))}
          </BookCarouselWrapper>
        ))}
      </BookCarouselTrack>

      <ArrowButton
        onClick={handlePlusBookDataIndex}
        disabled={nowBookDataIndex === bookCarouselData.length - 1}
        style={{
          opacity: nowBookDataIndex === bookCarouselData.length - 1 ? 0.5 : 1,
          cursor:
            nowBookDataIndex === bookCarouselData.length - 1
              ? "not-allowed"
              : "pointer",
          right: "10px",
        }}
      >
        ➡️
      </ArrowButton>
    </BookCarouselContainer>
  );
};

export default BookCarousel;
