import { useForm } from "@mantine/form"
import { createUserWithEmailAndPassword } from "firebase/auth"
import GoogleSignIn from "../components/GoogleSignIn"
import { auth } from "../utils/firebase"

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
      console.log("Login Successfull")
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
        <button type='submit'>Register</button>
      </form>

      <GoogleSignIn />
    </div>
  )
}
export default Register
