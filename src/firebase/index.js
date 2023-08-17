import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import serviceAccount from "./config";
// import { getStorage } from "firebase-admin/storage";

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "sherman-nadlan.appspot.com",
    databaseURL:
      "https://sherman-nadlan-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

export const firestore = admin.firestore();
export const bucket = getStorage().bucket();
