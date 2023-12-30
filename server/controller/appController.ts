import { Request, Response } from "express";

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
async function register(req: Request, res: Response) {
  res.json("Register route");
}

/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
async function login(req: Request, res: Response) {
  res.json("Login route");
}

/** GET: http://localhost:8080/api/user/example123 */
async function getUser(req: Request, res: Response) {
  res.json("Get user route");
}

/** GET: http://localhost:8080/api/generateOTP */
async function generateOTP(req: Request, res: Response) {
  res.json("generateOTP route");
}

/** GET: http://localhost:8080/api/verifyOTP */
async function verifyOTP(req: Request, res: Response) {
  res.json("VerifyOTP route");
}

// successfully redirect user to the reset password page when OTP is verified
/** GET: http://localhost:8080/api/createResetSession */
async function createResetSession(req: Request, res: Response) {
  res.json("Create reset session route");
}

// update the password in the database when we have valid session
/** PUT: http://localhost:8080/api/resetPassword 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
async function resetPassword(req: Request, res: Response) {
  res.json("Reset password route");
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
async function updateUser(req: Request, res: Response) {
  res.json("Update user route");
}

export {
  register,
  login,
  getUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
  updateUser,
};
