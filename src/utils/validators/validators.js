import * as yup from "yup";

export class Validators {
  static LoginValidate() {
    return yup.object().shape({
      Email: yup.string().email("Invalid email").required("Email is required"),
      Password: yup
        .string()
        .min(8)
        .max(32)
        .required()
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
    });
  }
  static RegisterValidate() {
    return yup.object().shape({
      Email: yup.string().email("Invalid email").required("Email is required"),
      Password: yup
        .string()
        .min(8)
        .max(32)
        .required()
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      Firstname: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required(),
      Lastname: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required(),
      "Phone number": yup
        .string()
        .matches(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
          "Phone number must be at least 10 digits",
        )
        .required(),
    });
  }
}
