import { authInstance } from "@/apis/utils/instance";
import { formattedDate } from "@/utils/fomattedData";

export const getMyInterestBook = async () => {
  try {
    // 이메일과 비밀번호를 API에 POST로 전송
    const response = await authInstance.get(`/api/book/save/find`);

    // 로그인 성공 시 응답 데이터 반환 (예: 토큰, 사용자 정보 등)
    return response.data; // 응답 데이터는 response.data에 있습니다
  } catch (error) {
    console.error("내 관심있는 책 조회 실패:", error.response || error.message);

    // 실패 시 에러 처리 로직 추가 가능 (예: 사용자에게 알림)
    throw error; // 에러를 호출한 곳으로 던져서 처리하게 함
  }
};

export const postBookFeel = async (bookId, date, pageRead, comment) => {
  // console.log(bookId, formattedDate(date), pageRead, comment)
  try {
    // 이메일과 비밀번호를 API에 POST로 전송
    const response = await authInstance.post(`/api/log/${bookId}`, {
      date: formattedDate(date),
      pageRead: pageRead,
      comment: comment,
    });

    // 로그인 성공 시 응답 데이터 반환 (예: 토큰, 사용자 정보 등)
    return response.data; // 응답 데이터는 response.data에 있습니다
  } catch (error) {
    console.error("소감 작성 에러:", error.response || error.message);

    // 실패 시 에러 처리 로직 추가 가능 (예: 사용자에게 알림)
    throw error; // 에러를 호출한 곳으로 던져서 처리하게 함
  }
};

export const postWriteReview = async(userId, bookId, rate, reviewText, isPublic=true)=>{
  try {
    const response = await authInstance.post(`/api/review/save`, {userId, bookId, rate, reviewText, isPublic})
    return response.data
  } catch (error) {
    console.error("소감 작성 에러:", error.response || error.message);

    // 실패 시 에러 처리 로직 추가 가능 (예: 사용자에게 알림)
    throw error; // 에러를 호출한 곳으로 던져서 처리하게 함    
  }
}