import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: { firstName: "", lastName: "", email: "" },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must not be longer than 15 characters")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must not be longer than 20 characters")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <br></br>
            <br></br>
            <button type="submit">Submit Form</button>
        </form>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
