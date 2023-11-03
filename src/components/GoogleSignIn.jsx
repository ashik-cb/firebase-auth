import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../utils/firebase"

const GoogleSignIn = () => {
  return (
    <button
      onClick={() => {
        signInWithPopup(auth, googleProvider)
      }}
    >
      Sign in with google
    </button>
  )
}
export default GoogleSignIn
