const validate = (data , type) => {

    const errors = {};

    if(!data.username) {
        errors.username = "username is required"
      }  else {
          delete errors.username
      }
    
    if (!data.email) {
        errors.email = "email is required"
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
        errors.email = "please enter a valid email address"
    } else (
        delete errors.email
    )

    if(!data.password) {
        errors.password = "password is required"
    } else if (data.password.length < 6) {
        errors.password = "password needs to be at least 6 characters"
    } else {
        delete errors.password
    }

    return errors;
};

export default validate;