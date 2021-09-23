import admin from 'firebase-admin';

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "project_id": process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ADMIN,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
      "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
}


export default admin
