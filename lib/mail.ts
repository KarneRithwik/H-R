// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//     },
// });

import nodemailer from "nodemailer";

// ✅ DEBUG LOG (allowed here)
console.log(
    "MAIL CONFIG:",
    process.env.GMAIL_USER,
    process.env.GMAIL_APP_PASSWORD ? "PASSWORD OK" : "PASSWORD MISSING"
);

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
