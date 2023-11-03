import { initializeApp } from "firebase/app"
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsQkcsVExyHIpj-8ISzvR3g0OPOtyOUwY",
  authDomain: "fir-project-96270.firebaseapp.com",
  projectId: "fir-project-96270",
  storageBucket: "fir-project-96270.appspot.com",
  messagingSenderId: "247708216245",
  appId: "1:247708216245:web:5eeb95b2498aaf1792c7fc",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()
export const githubProbider = new GithubAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
