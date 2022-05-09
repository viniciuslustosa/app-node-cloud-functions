/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
 exports.appTest = (event, context) => {
    const axios = require('axios');
    const message = event.data
      ? Buffer.from(event.data, 'base64').toString()
      : 'Hello, World';
    console.log('Message', message);
    axios.post('https://app-xmb6bhqcvq-uc.a.run.app/api/user', JSON.parse(message))
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  };
  