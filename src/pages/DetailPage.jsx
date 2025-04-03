import Background from "@components/Common/Background";
import DetailPageInfo from "@components/DetailPage/DetailPageInfo";
import BookReview from "@components/DetailPage/BookReview";

import { bookData } from "@assets/data/temp";

const DetailPage = ()=>{
    const data = bookData[0]

    return (
        <Background>
            <DetailPageInfo data={data} />
            <BookReview />
        </Background>
    )
}

export default DetailPage;