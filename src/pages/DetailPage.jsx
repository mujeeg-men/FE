import Background from "@components/Common/Background";
import DetailPageInfo from "@components/DetailPage/DetailPageInfo";
import BookReview from "@components/DetailPage/BookReview";

import { bookData } from "@assets/data/temp";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  getBookDataByIsbn,
  getReviewDataById,
  postSaveBook,
} from "@/apis/api/book/bookApi";

const DetailPage = () => {
  // const { bookId } = useParams();
  const [bookData, setBookData] = useState({
    bookImageUrl:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788937434488.jpg",
    bookName: "노르웨이의 숲",
    bookAuthor: "무라카미 하루키",
    bookPublisher: "민음사",
    bookPrice: 15300,
    bookDescription:
      '무라카미 하루키를 만나기 위해 가장 먼저 읽어야 할 책\n무라카미 하루키의 대표작 『노르웨이의 숲』. 1987년 발표된 후 세계적인 "하루키 붐"을 일으키며 저자의 문학적 성과를 널리 알린 현대 일본 문학의 대표작이다. 원문에 충실하면서도 현대적인 언어로 새롭게 번역한 이 책은 첫 만남을 추억하는 독자와 새로운 만남을 기다리는 독자 모두에게 잊지 못할 기억을 전해준다.',
  });
  const [reviewData, setReviewData] = useState([
    {
      reviewTitle: "사랑과 상실의 숲",
      reviewContents: "내용1",
      reviewDate: "2025-06-06",
    },
    {
      reviewTitle: "그 시절, 와타나베의 고독",
      reviewContents: "내용1",
      reviewDate: "2025-06-03",
    },
    {
      reviewTitle: "너를 잊는 연습",
      reviewContents: "내용1",
      reviewDate: "2025-05-31",
    },
    {
      reviewTitle: "비 오는 날의 레퀴엠",
      reviewContents: "내용1",
      reviewDate: "2025-05-27",
    },
    {
      reviewTitle: "나는 아직도 그 숲에 있다",
      reviewContents: "내용1",
      reviewDate: "2025-05-27",
    },
    {
      reviewTitle: "조용히 무너지는 마음",
      reviewContents: "내용1",
      reviewDate: "2025-05-24",
    },
    {
      reviewTitle: "레코드 속의 추억",
      reviewContents: "내용1",
      reviewDate: "2025-04-22",
    },
    {
      reviewTitle: "살아 있는 자의 슬픔",
      reviewContents: "내용1",
      reviewDate: "2025-03-25",
    },
  ]);

  // const saveInterestBook = async (id) => {
  //   postSaveBook(id)
  // };

  useEffect(() => {
    // const fetchBookDataByIsbn = async () => {
    //   // console.log(bookId)
    //   const res = await getBookDataByIsbn(bookId);
    //   console.log(res.data)
    //   setBookData(res.data);
    // };
    // const fetchReviewDataById = async () => {
    //   const res = await getReviewDataById(bookId);
    //   // console.log(res)
    //   setReviewData(res);
    // };
    // fetchBookDataByIsbn();
    // fetchReviewDataById();
  }, []);

  return (
    <Background>
      <DetailPageInfo data={bookData} />
      <BookReview reviewData={reviewData} bookData={bookData} />
    </Background>
  );
};

export default DetailPage;
