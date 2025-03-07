import validator from "validator";

export const isValidEmail = (email) => {
  let errjson = {};

  if (!email || (email && email.trim()) == "") {
    errjson = { email: `"Email" is Required` };
  } else if (email.length < 5) {
    errjson = { email: `"Email" must be at least 5 characters long` };
  } else if (email.length > 320) {
    errjson = {
      email: `"Email" is too long to accept`,
    };
  } else if (!validator.isEmail(email)) {
    errjson = { email: "This does'nt looks like a valid Email Address" };
  }

  return errjson;
};

export const isValidUsername = (username) => {
  let errjson = {};

  if (!username || (username && username.trim()) == "") {
    errjson = { username: `"Username" is Required` };
  } else if (username.length < 3) {
    errjson = { username: "Minimum 3 characters required" };
  } else if (username.length > 24) {
    errjson = { username: `"Username" is too long` };
  } else if (!/^(?!.*\.\.)(?!.*__)[a-zA-Z0-9._]{3,24}$/.test(username)) {
    errjson = { username: "This does'nt looks like a valid Username" };
  }
  return errjson;
};

export const isValidPassword = (password) => {
  let errjson = {};

  if (!password || (password && password.trim()) == "") {
    errjson = { password: `"Password" is Required` };
  } else if (password.length < 8) {
    errjson = { password: "Minimum 8 characters required" };
  } else if (password.length > 256) {
    errjson = { password: `"Password" is too long` };
  }
  // uppercase
  else if (!/[A-Z]/.test(password)) {
    errjson = {
      password: "At least one uppercase letter required",
    };
  }
  // lowercase
  else if (!/[a-z]/.test(password)) {
    errjson = {
      password: "At least one lowercase letter required",
    };
  }
  // number
  else if (!/[0-9]/.test(password)) {
    errjson = { password: `At least one digit required` };
  }
  // special character
  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errjson = {
      password: `At least one special character is required`,
    };
  }

  return errjson;
};

export const isValidEmailorUsername = (user) => {
  let errjson = {};

  if (typeof user === "string" && user.includes("@")) {
    if ("email" in isValidEmail(user)) {
      errjson = isValidEmail(user);
    }
  } else {
    errjson = isValidUsername(user);
  }

  if ("email" in errjson) {
    return {
      user: errjson.email,
    };
  } else if ("username" in errjson) {
    return {
      user: errjson.username,
    };
  } else {
    return {};
  }
};
