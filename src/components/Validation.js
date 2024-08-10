import * as yup from 'yup' 
export const contactValidation = {
    initialState: {
        name: "",
        email: "",
        phone: "",
        message: "",
    },
    schema: yup.object().shape({
        name: yup
            .string()
            // .min(4, "Name must be at least 4 characters")
            // .trim()
            .required("Name is must be required"),
        email: yup.string().email().required("Email field is required !"),
        phone: yup.string().trim().required("Phone number is must be required"),
        message: yup.string().trim().required("Message is must be required"),
    }),
};


