import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('escribe un mail valido hombre')
        .required('Email is Required'),
    password: yup
        .string()
        .min(8,'to short!')
        .max(1000,'to long!')
        .required('Password is required'),
})