const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({debug: true});

app.handle('greeting', conv => {
 let message = 'A wondrous greeting, adventurer! Welcome back to the mythical land of Gryffinberg!';
 if (!conv.user.lastSeenTime) {
   message = 'Welcome to the mythical land of  Gryffinberg! Based on your clothes, you are not from around these lands. It looks like you\'re on your way to an epic journey.';
 }
 conv.add(message);
});


exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
