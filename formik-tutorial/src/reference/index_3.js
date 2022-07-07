import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, "Must not be longer than 15 characters")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must not be longer than 20 characters")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email Address</label>
                    <Field
                        name="email"
                        type="text"
                        placeholder="test@example.com"
                    />
                    <ErrorMessage name="email" />

                    <br></br>
                    <br></br>

                    <button type="submit">Submit Form</button>
                </form>
            )}
        </Formik>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
