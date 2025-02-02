import FlashMessage, { showMessage } from "react-native-flash-message";

const showError=()=>{
    showMessage({
        type:'danger',
        icon:'danger',
        message:'Enter email and password'
    })
}
const showSucces=()=>{
    showMessage({
        type:'success',
        icon:'success',
        message:'Succesfully LogIn'
    })
}
export{
    showError,showSucces
}