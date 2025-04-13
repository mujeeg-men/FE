import Background from "@components/Common/Background";
import DetailPageInfo from "@components/DetailPage/DetailPageInfo";
import BookReview from "@components/DetailPage/BookReview";

import { bookData } from "@assets/data/temp";
import { useParams } from "react-router";

const DetailPage = ()=>{
    const {bookId} = useParams()
    const data = bookData.find(item => item.id==Number(bookId))

    return (
        <Background>
            <DetailPageInfo data={data} />
            <BookReview />
        </Background>
    )
}

export default DetailPage;