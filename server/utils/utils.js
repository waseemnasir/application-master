const mongodb = "mongodb+srv://waseem:1qaz2wsx@cluster0.9xw5aag.mongodb.net/";
// const mongodb = "mongodb://localhost:27017/";
const secret = "secret123";
const port = process.env.PORT || 4000;
const GOOGLE_REFRESH_TOKEN = '1//04fJErlbIGx0OCgYIARAAGAQSNwF-L9IraBKfP0FV6zzhShpEcYDnwgs0bKqKOfLy9Js8T9vfFUQ0x8TF8lghWaw5Hx7tumevmk0'
const CLIENT_ID = '406293843200-dvr1r0qst3qfo5c6f8kb461c20umg3r9.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
module.exports = { secret, mongodb, port, GOOGLE_REFRESH_TOKEN, CLIENT_ID, CLIENT_SECRET };
