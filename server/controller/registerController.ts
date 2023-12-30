import { Request, Response } from "express";
import bcrypt from "bcrypt";

import Users, { User } from "../model/User.model";

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Indore Light, Tennis, 12345",
  "profile": ""
}
*/
export async function register(req: Request, res: Response) {
  try {
    const { username, password, profileImage, email } = req.body;

    // check if user already exists
    const existUsername = new Promise<void>((resolve, reject) => {
      Users.findOne({ username: String }, function (err: Error, user: User) {
        console.log("user working");
        if (err) reject(new Error(err.message));
        if (user) reject({ error: "User already exists" });
        resolve();
      });
    });

    // check if email already exists
    const existEmail = new Promise<void>((resolve, reject) => {
      Users.findOne({ email }, function (err: Error, email: User) {
        console.log("email working");
        if (err) reject(new Error(err.message));
        if (email) reject({ error: "Email already exists" });
        resolve();
      });
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hash) => {
              const user = new Users({
                username,
                password: hash,
                profileImage: profileImage || "",
                email,
              });

              // return save result as a response
              user
                .save()
                .then((result) => {
                  return res
                    .status(201)
                    .send({ message: "User created successfully" });
                })
                .catch((err) => {
                  return res.status(500).send({ err });
                });
            })
            .catch((err) => {
              return res.status(500).send({
                err: "Enable to hash password",
              });
            });
        }
      })
      .catch((err) => {
        return res.status(500).send({ err: "Why" });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}
