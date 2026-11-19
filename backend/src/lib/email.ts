import { Resend } from "resend";
import { env } from "./env";

export async function sendWelcomeEmail(email: string, username: string) {
  // No API key yet: just print the email in the terminal
  if (!env.RESEND_API_KEY) {
    console.log(`[email preview] Welcome ${username}, sent to ${email}`);
    return "preview";
  }
  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const error = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: "ratneshbvk2504@gmail.com",
      subject: "Welcome to Binance Clone",
      html: `<p>Hi ${username},</p><p>Welcome to Binance Clone! We're excited to have you on board.</p>`,
    });
    if (error) {
      console.error("Welcome email failed:", error.message);
      return "failed";
    }

    return "sent";
  } catch (err) {
    console.error("Error sending welcome email:", err);
    return "failed";
  }
}
