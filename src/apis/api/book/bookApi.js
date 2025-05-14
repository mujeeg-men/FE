import { authInstance } from "@/apis/utils/instance"

export const getBestSeller = async()=>{
    const response = await authInstance.get(`/api/book/best`)
    return response.data
}

export const getBookDataByIsbn  = async (isbn)=>{
    const response = await authInstance.get(`/api/book/detail?isbn=${isbn}`)
    return response.data
}

export const getReviewDataById = async (id)=>{
    const response = await authInstance.get(`/api/review/book/${id}`)
    return response.data
}