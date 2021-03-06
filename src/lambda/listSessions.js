require('dotenv').config();

// eslint-disable-next-line
export function listSessions(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;

  // Hit DB
  // List all sessions

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: API_KEY }),
  });
}
