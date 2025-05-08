import { authInstance } from "@/apis/utils/instance"

export const getBestSeller = async()=>{
    const response = await authInstance.get(`/api/book/best`)
    return response.data
}