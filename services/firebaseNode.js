import admin from 'firebase-admin';

const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY)

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "project_id": process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ADMIN,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
      "private_key": privateKey
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
}


export default admin
