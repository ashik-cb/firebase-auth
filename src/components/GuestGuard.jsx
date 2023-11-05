import { Navigate } from "react-router-dom"
import { useUser } from "../providers/AuthProvider"

const GuestGuard = ({ children }) => {
  const { user } = useUser()
  if (user) {
    return <Navigate to='/' />
  }
  return <div>{children}</div>
}
export default GuestGuard
