import { useState } from "react";
import Toast from "../Toast/Toast";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { SignupSchema } from "../../validationSchema";

// Toggle between forms
interface SignupProps {
  toggleForm: () => void;
}

// Form values
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup({ toggleForm }: SignupProps) {
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (
            values: Values,
            { setSubmitting, resetForm }: FormikHelpers<Values>
          ) => {
            try {
              // Dummy call
              await new Promise((resolve) => setTimeout(resolve, 1000)); //Success
              // await new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 1000)); //Failure

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
                name="firstName"
                type="text"
                placeholder="First Name"
                className={`bg-gray-50 rounded-lg p-2 border-2 w-full ${
                  errors.firstName &&
                  touched.firstName &&
                  "outline-none ring-red-400 ring-2 "
                }`}
              />

              <div className="text-red-500 w-full text-center">
                <ErrorMessage name="firstName" />
              </div>

              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={`bg-gray-50 rounded-lg p-2 border-2 w-full ${
                  errors.lastName &&
                  touched.lastName &&
                  "outline-none ring-red-400 ring-2 "
                }`}
              />

              <div className="text-red-500 w-full text-center">
                <ErrorMessage name="lastName" />
              </div>

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

              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={`bg-gray-50 rounded-lg p-2 border-2 w-full ${
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  "outline-none ring-red-400 ring-2 "
                }`}
              />

              <div className="text-red-500 w-full text-center">
                <ErrorMessage name="confirmPassword" />
              </div>
              <button
                type="submit"
                className={`bg-blue-500 rounded px-4 py-2 text-white font-bold w-2/3 my-4 
                  ${isSubmitting && "bg-blue-300"}`}
                disabled={isSubmitting}
              >
                Sign Up
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
        message="Successfully signed up!"
        isVisible={toast}
        onClose={() => setToast(false)}
      />

      {/* Error Toast */}
      <Toast
        message="Error in signing up, please try again"
        isVisible={errorToast}
        onClose={() => setErrorToast(false)}
        isSuccess={false}
      />
    </div>
  );
}
