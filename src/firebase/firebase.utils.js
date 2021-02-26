import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAN_ZEY9PfcFpSLjMN0OtGHI5sNyRdC850',
  authDomain: 'e-commerce-b57a1.firebaseapp.com',
  projectId: 'e-commerce-b57a1',
  storageBucket: 'e-commerce-b57a1.appspot.com',
  messagingSenderId: '612399155508',
  appId: '1:612399155508:web:6a6bc14c6da7729dd9bd61',
  measurementId: 'G-VD7EF35BZY',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
