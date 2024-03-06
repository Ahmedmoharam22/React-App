import * as yup from "yup"


const registerShema = yup.object().shape({
    name:yup.string().required().min(3),
    email:yup.string().required().email(),
    password:yup.string().required().min(5).max(35),
    confirmPassword:yup.string().required().oneOf([yup.ref("password")] , ["Password Does Not Match"])
})
export default registerShema;
