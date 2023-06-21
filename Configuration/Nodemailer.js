import nodemailer from "nodemailer"

const Email = process.env.NEXT_PUBLIC_EMAIL
const Password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: Email, pass: Password }
})

export const mailOptions = { from: Email, to: Email }