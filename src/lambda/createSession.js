require('dotenv').config();
const OpenTok = require('opentok');

// eslint-disable-next-line
export function handler(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;
  const opentok = new OpenTok(API_KEY, SECRET);

  // eslint-disable-next-line
  opentok.createSession((err, session) => {
    if (err) return console.log(err);

    const publisherToken = opentok.generateToken(session.sessionId, { role: 'publisher' });
    const subscriberToken = opentok.generateToken(session.sessionId, { role: 'subscriber' });

    // save the sessionId
    // db.save('session', session.sessionId, done);
    const response = {
      roomName: 'hello_world',
      sessionId: session.sessionId,
      token: {
        publisher: publisherToken,
        subscriber: subscriberToken,
      },
    };

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });
}
