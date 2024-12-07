import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { SigninSchema } from "../../validationSchema";
import { useState } from "react";
import Toast from "../Toast/Toast";

interface SigninProps {
  toggleForm: () => void;
}

// Form values
interface Values {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Signin({ toggleForm }: SigninProps) {
  const [toast, setToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);

  return (
    <div className="w-full mx-4 md:w-md max-w-md">
      <div className="flex flex-col gap-8">
        <img
          src="/formik.svg"
          alt="Logo"
        />

        <Formik
          initialValues={{
            email: localStorage.getItem("email") || "", // Fetch saved email if exists
            password: "",
            rememberMe: false,
          }}
          validationSchema={SigninSchema}
          onSubmit={async (
            values: Values,
            { setSubmitting, resetForm }: FormikHelpers<Values>
          ) => {
            try {
              // Dummy call
              await new Promise((resolve) => setTimeout(resolve, 1000)); //Success
              // await new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 1000)); //Failure

              // Save email if "remember me" is checked
              if (values.rememberMe) {
                localStorage.setItem("email", values.email);
              }

              // Show toast and reset form
              setToast(true);
              resetForm();
            } catch {
              setErrorToast(true);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-2 items-center justify-center p-4 bg-white rounded-2xl shadow-lg w-full">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`bg-gray-50 rounded-lg p-2 border-2 w-full ${
                  errors.email &&
                  touched.email &&
                  "outline-none ring-red-400 ring-2 "
                }`}
              />

              <div className="text-red-500 w-full text-center">
                <ErrorMessage name="email" />
              </div>

              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={`bg-gray-50 rounded-lg p-2 border-2 w-full ${
                  errors.password &&
                  touched.password &&
                  "outline-none ring-red-400 ring-2 "
                }`}
              />

              <div className="text-red-500 w-full text-center">
                <ErrorMessage name="password" />
              </div>

              <label className="flex gap-2 w-full text-gray-700">
                <Field
                  type="checkbox"
                  name="rememberMe"
                />
                Remember Me
              </label>

              <button
                type="submit"
                className={`bg-blue-500 rounded px-4 py-2 text-white font-bold w-2/3 my-4 
                ${isSubmitting && "bg-blue-300"}`}
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Form toggle */}
        <button
          onClick={toggleForm}
          className="text-blue-600"
        >
          Already have an account?
        </button>
      </div>

      {/* Success Toast */}
      <Toast
        message="Successfully logged in!"
        isVisible={toast}
        onClose={() => setToast(false)}
      />

      {/* Error Toast */}
      <Toast
        message="Login error, please try again"
        isVisible={errorToast}
        onClose={() => setErrorToast(false)}
        isSuccess={false}
      />
    </div>
  );
}
