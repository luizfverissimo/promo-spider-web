import admin from 'firebase-admin';

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ADMIN,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
}


export default admin
