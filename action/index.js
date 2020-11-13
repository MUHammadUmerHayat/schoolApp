import axios from "axios";
import {Actions} from "react-native-router-flux"
import {
CURRENT_USER
} from "./type";


const api="http://thenext-001-site1.ctempurl.com/api/AppLogin/GetUserLogin";

export const loginRes=(d,spinnerRender)=>async(dispatch)=>{
const res=await axios.post(api,{
        UserName:d.userName,
        Password:d.password,
        Token:"abe9fad8-7852-43ed-9ab9-fcea44da49b8"
});
dispatch({
    type:CURRENT_USER,
    payload:res.data
});
if(res.data.Error){
    spinnerRender();
    return null
}else{
    Actions.parents();
    spinnerRender();
}
}