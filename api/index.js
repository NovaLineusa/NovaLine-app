const twilio = require("twilio");

const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { phone } = req.body || {};

    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }

    await client.messages.create({
      body: "NovaLine: We received your request. Setup will begin shortly 🚀",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });

    } catch (error) {
  console.error("Twilio error:", error);
  return res.status(500).json({
    message: error.message || "Error sending SMS"
  });
}
};