import { config } from '../../credentials/secret/firebase'

let firebase = require('firebase')
let firebaseui = require('firebaseui')

firebase.initializeApp(config)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

let uiConfig = {
  signInSuccessUrl: 'https://google.com',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
}

export function fuiStart () {
  // Initialize the FirebaseUI Widget using Firebase.
  let ui = new firebaseui.auth.AuthUI(firebase.auth())
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig)
}
