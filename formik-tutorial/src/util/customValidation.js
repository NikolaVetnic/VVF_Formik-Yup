// custom validation function not using Yup
export function validate(values) {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be no more than 15 characters";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 15) {
        errors.lastName = "Must be no more than 15 characters";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    return errors;
}
