export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        await transporter.sendMail({
            from: `"OTP Login" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Your OTP",
            html: `<h2>Your OTP is ${otp}</h2>`,
        });

        console.log("OTP:", otp); // TEMP (for testing)

        return NextResponse.json({ message: "OTP sent" });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to send OTP" },
            { status: 500 }
        );
    }
}
