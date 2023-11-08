import {initializeApp} from 'firebase/app'
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgwQTMz-nrbWKAPbUEZU_p4LwbH3feHh4",
    authDomain: "crwn-clothing-db-68297.firebaseapp.com",
    projectId: "crwn-clothing-db-68297",
    storageBucket: "crwn-clothing-db-68297.appspot.com",
    messagingSenderId: "557500666248",
    appId: "1:557500666248:web:d758fc38a26b82c76fea3d",
    measurementId: "G-XQY5112H1Y"
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = await doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (e) {
            console.log('Error creating user', e.message)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}