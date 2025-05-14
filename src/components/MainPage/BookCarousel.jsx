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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BookCarousel = ({data = bookData}) => {
  const splitIntoChunk = (arr, chunk) => {
    if(!arr) return;
    const result = [];
    for (let i = 0; i < arr.length; i += chunk) {
      result.push(arr.slice(i, i + chunk));
    }
    return result;
  };

  const [nowBookDataIndex, setNowBookDataIndex] = useState(0);
  const bookCarouselData = splitIntoChunk(data, 5);

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
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>

      <BookCarouselTrack currentIndex={nowBookDataIndex}>
        {bookCarouselData?.map((chunk, i) => (
          <BookCarouselWrapper key={i}>
            {chunk.map((book, idx) => (
              <BookCarouselItemWrapper
                key={idx}
                style={{ textAlign: "center" }}
                onClick={() => {
                  // console.log(book.bookIsbn)
                  navigate(`/search/${book.bookIsbn}`);
                }}
              >
                <img style={{ width: "100%" }} src={book.bookImageUrl} alt="" />
                <span>{book.bookName}</span>
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
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>
    </BookCarouselContainer>
  );
};

export default BookCarousel;
