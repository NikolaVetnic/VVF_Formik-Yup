import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage, Field, Form, Formik, useField, useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";
import { MyTextInput } from "./components/MyTextInput";
import { MySelect } from "./components/MySelect";
import { MyCheckbox } from "./components/MyCheckbox";

const SignupForm = () => {
    return (
        <>
            <h1>Subscribe</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    sex: "",
                    acceptedTerms: false,
                }}
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
                    sex: Yup.string()
                        .oneOf(["male", "female"], "Invalid sex")
                        .required("Required"),
                    acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf(
                            [true],
                            "You must accept the terms and conditions"
                        ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="John"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                        />

                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john.doe@example.com"
                        />

                        <MySelect label="Sex" name="sex">
                            <option value="">Select sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </MySelect>

                        <MyCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </MyCheckbox>

                        <br></br>

                        <button type="submit">Submit Form</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
