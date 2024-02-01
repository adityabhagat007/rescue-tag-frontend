import { PUBLIC_APIS } from "../utils/config";
import { PUBLIC_API_REQ, apiErrorHandler } from "../utils/configAxios"

export const userSignUp = async(data) =>{
    try{
        const response = await PUBLIC_API_REQ.post(PUBLIC_APIS.signup,data);
        console.log(response)
        return {data:response.data ,status:response.status}
    }catch(err){
        return apiErrorHandler(err);
    }
}