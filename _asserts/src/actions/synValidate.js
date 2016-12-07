const validate = (values) => {
    console.log('8 -- values is: ', values);
    const errors = {};
    const EMAILREGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!values.title) {
        errors.title = 'Title is required.';
    }
    if (!values.categories) {
        errors.categories = 'Categories is required.';
    }
    if (!values.age) {
        errors.age = 'Age is required.';
    }
    if (!values.email) {
        errors.email = 'Email is required.';
    } else if(!EMAILREGEX.test(values.email)) {
        errors.email = 'Email is invalid!';
    }
    if (!values.content) {
        errors.content = 'Content is required.';
    }

    return errors;

};

export default validate;