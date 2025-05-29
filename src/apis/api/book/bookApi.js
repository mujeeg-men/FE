import { authInstance } from "@/apis/utils/instance";

export const getBestSeller = async () => {
  const response = await authInstance.get(`/api/book/best`);
  return response.data;
};

export const getBookDataByIsbn = async (isbn) => {
  const response = await authInstance.get(`/api/book/detail?isbn=${isbn}`);
  return response.data;
};

export const getReviewDataById = async (id) => {
  const response = await authInstance.get(`/api/review/book/${id}`);
  return response.data;
};

export const getBookDataByString = async (bookName) => {
  const response = await authInstance.get(
    `/api/book/search?bookName=${bookName}`
  );
  return response.data;
};

export const postSaveBook = async (isbn) => {
  // console.log(isbn)
  const response = await authInstance.post(`/api/book/save/${isbn}`);
  return response.data;
};

export const getMyMonthBookFeel = async (year, month) => {
  console.log(year, month);
  try {
    const response = await authInstance.get(
      `/api/log/by-month?year=${year}&month=${month}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`월별 소감 조회 에러: `, error);
  }
};

export const getMyDateBookFeel = async (date) => {
  try {
    const response = await authInstance.get(`/api/log/by-date?date=${date}`);
    return response.data;
  } catch (error) {
    throw new Error(`일별 소감 조회 에러: `, error);
  }
};
