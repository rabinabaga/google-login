const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "14292226212-4grdaa9mlss9plc3kf0f92oqqhcr67ej.apps.googleusercontent.com"
);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "14292226212-4grdaa9mlss9plc3kf0f92oqqhcr67ej.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
    });
    console.log("ticket", ticket);
    const payload = ticket.getPayload();
    return { payload };
  } catch (error) {
    console.error("Error verifying Google ID token:", error);
    return { error: "Invalid user detected. Please try again" };
  }
}

module.exports = verifyGoogleToken;
