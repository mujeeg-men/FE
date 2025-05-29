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
  const { bookId } = useParams();
  const [bookData, setBookData] = useState({});
  const [reviewData, setReviewData] = useState([]);

  const saveInterestBook = async (id) => {
    postSaveBook(id)
  };

  useEffect(() => {
    const fetchBookDataByIsbn = async () => {
      // console.log(bookId)
      const res = await getBookDataByIsbn(bookId);
      // console.log(res.data)
      setBookData(res.data);
    };

    const fetchReviewDataById = async () => {
      const res = await getReviewDataById(bookId);
      // console.log(res)
      setReviewData(res);
    };

    fetchBookDataByIsbn();
    fetchReviewDataById();
  }, []);

  return (
    <Background>
      <DetailPageInfo data={bookData} saveInterestBook={saveInterestBook} />
      <BookReview reviewData={reviewData} bookData={bookData} />
    </Background>
  );
};

export default DetailPage;
