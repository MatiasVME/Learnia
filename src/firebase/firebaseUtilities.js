import { config } from '../../credentials/secret/firebase'

let firebase = require('firebase')

firebase.initializeApp(config)
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
