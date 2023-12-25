import toast from "react-hot-toast";

// Validate login page username
export async function userValidate(values: { username?: string }) {
  const errors = usernameVerify({}, values);

  return errors;
}

// Validate password
export async function passwordValidate(values: { password?: string }) {
  const errors = passwordVerify({}, values);

  return errors;
}

// Validate reset password
export async function resetPasswordValidate(values: {
  password?: string;
  confirm_password?: string;
}) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_password) {
    errors.confirm_password = toast.error("Password does not match");
  }
  return errors;
}

/////////////////////////////////////////////////////////////////////

// Validate username

function usernameVerify(
  error = {},
  values: { username?: string } // Provide the correct type for the values parameter
) {
  if (!values.username) {
    error.username = toast.error("Username is required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username");
  }

  return error;
}

// Validate password

function passwordVerify(
  error = {},
  values: { password?: string } // Provide the correct type for the values parameter
) {
  const specialChars = /[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;

  if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    error.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special character");
  }

  return error;
}
