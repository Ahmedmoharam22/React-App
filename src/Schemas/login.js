import * as yup from "yup"


const loginSchema = yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required().min(5).max(35),
})
export default loginSchema;
