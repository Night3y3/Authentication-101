import nodemailer from "nodemailer";
import config from "config";

const smtp = config.get<Object>("smtp");

async function sendMail() {}

export default sendMail;
