import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAiSS3NOiTo6P5rndfnhffU1Fe51IZYTtE",
    authDomain: "crwn-db-31cea.firebaseapp.com",
    projectId:"crwn-db-31cea",
    storageBucket: "crwn-db-31cea.appspot.com",
    messagingSenderId: "1042868289710",
    appId: "1:1042868289710:web:f374be56c0a2fb8a4cad3f",
    measurementId: "G-5DVKNRPZVH",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exit) {
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalData,
            });
        } catch(err) {
            console.log('error creating user', err.message);
        }
    
    }
    return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;