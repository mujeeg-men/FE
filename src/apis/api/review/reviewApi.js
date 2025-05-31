import { authInstance, baseInstance } from "@/apis/utils/instance";

export const postReview = async (
  bookId,
  rate,
  reviewText,
  reviewTitle,
  isPublic = false
) => {
  console.log(bookId, rate, reviewText, reviewTitle)
  try {
    // 이메일과 비밀번호를 API에 POST로 전송
    const response = await authInstance.post(`/api/review/save`, {
      bookId: bookId,
      rate: rate,
      reviewText: reviewText,
      reviewTitle: reviewTitle,
      isPublic: isPublic,
    });

    // 로그인 성공 시 응답 데이터 반환 (예: 토큰, 사용자 정보 등)
    return response.data; // 응답 데이터는 response.data에 있습니다
  } catch (error) {
    console.error("독후감 저장 api 실패:", error.response || error.message);

    // 실패 시 에러 처리 로직 추가 가능 (예: 사용자에게 알림)
    throw error; // 에러를 호출한 곳으로 던져서 처리하게 함
  }
};

export const getMyReviewData = async()=>{
  try {
    const response = await authInstance.get(`/api/review/user`)
    return response.data
  } catch (error) {
    console.error("독후감 조회 api 실패", error.response || error.message)
  }
}

export const getBookRate = async(isbn)=>{
  try {
    const response = await authInstance.get(`/api/review/rate/${isbn}`)
    return response.data    
  } catch (error) {
    console.error("독후감 별점 조회 api 실패", error.response || error.message)    
  }
}