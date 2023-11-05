import { Link } from "react-router-dom"
import { useUser } from "../providers/AuthProvider"
import { auth } from "../utils/firebase"

const Navbar = () => {
  const { user } = useUser()
  return (
    <div>
      <Link to='/'>Home</Link>
      {!user && (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </>
      )}

      {user && <button onClick={() => auth.signOut()}>Logout</button>}
    </div>
  )
}
export default Navbar
