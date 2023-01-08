const { createTransport } = require("nodemailer");
const { google } = require('googleapis')
const { GOOGLE_REFRESH_TOKEN, CLIENT_ID, CLIENT_SECRET } = require('../utils/utils')
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, '')
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN })

transporter = async () => {
  const accessToken = await oAuth2Client.getAccessToken()
  return createTransport({
    service: ".gmail",
    auth: {
      user: "hmmotors425@gmail.com",
      type: "OAuth2",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      accessToken: accessToken,
      refreshToken: GOOGLE_REFRESH_TOKEN
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
}


module.exports = transporter;
