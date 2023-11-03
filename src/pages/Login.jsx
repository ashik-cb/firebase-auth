import { useForm } from "@mantine/form"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import GoogleSignIn from "../components/GoogleSignIn"
import { auth, githubProbider } from "../utils/firebase"

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <input
          type='email'
          {...form.getInputProps("email")}
          placeholder='Enter your email'
        />
        <input
          type='password'
          {...form.getInputProps("password")}
          placeholder='Enter your password'
        />
        <button type='submit'>Login</button>
      </form>
      <button
        onClick={() => {
          signInWithPopup(auth, githubProbider)
        }}
      >
        Sign in with Github
      </button>
      <GoogleSignIn />
    </div>
  )
}
export default Login
