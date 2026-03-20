export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }

    const twilio = require("twilio");

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      body: "Welcome to NovaLine 🚀 Your service request is received.",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    return res.status(200).json({ message: "SMS sent successfully" });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      message: error.message || "Server crash",
    });
  }
}