import { Navigate } from "react-router-dom"
import { useUser } from "../providers/AuthProvider"

const AuthGuard = ({ children }) => {
  const { user } = useUser()

  if (!user) {
    return (
      <div>
        <Navigate to='/login' />
        Redirecting....
      </div>
    )
  }
  return <div>{children}</div>
}
export default AuthGuard
