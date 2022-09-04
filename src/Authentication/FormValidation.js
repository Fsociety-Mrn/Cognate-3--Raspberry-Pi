import * as yup from "yup";

export const EmailSchema  = yup.object().shape({
    email : yup.string().email("Please provide a valid email address").required(),
})

export const PasswordSchema = yup.object().shape({
    password: yup.string().min(6).max(20).required()
})
