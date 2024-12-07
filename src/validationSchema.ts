import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name needs to be atleast 2 characters")
    .max(50, "First name cannot be that long")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Last name needs to be atleast 2 characters")
    .max(50, "Last name cannot be that long")
    .required("Required"),

  email: Yup.string().email("Please enter correct email").required("Required"),

  password: Yup.string()
    .min(6, "Password needs to be atleast 6 characters")
    .required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Required"),
});
