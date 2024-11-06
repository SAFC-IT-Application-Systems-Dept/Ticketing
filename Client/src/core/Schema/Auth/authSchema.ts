import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
});

export type LoginFormType = yup.InferType<typeof LoginFormSchema>;
