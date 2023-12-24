import toast from "react-hot-toast";

// Validate login page username
export async function userValidate(values: { username?: string }) {
  const errors = usernameVerify({}, values);

  return errors;
}

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
