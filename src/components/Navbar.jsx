import { Link } from "react-router-dom"
import { useUser } from "../providers/AuthProvider"
import { auth } from "../utils/firebase"

const Navbar = () => {
  const { user } = useUser()
  return (
    <div className='border-b bg-white h-16'>
      <div className='max-w-7xl flex justify-between h-full items-center  mx-auto px-4 md:px-6'>
        <Link
          to='/'
          className='text-gray-600 hover:bg-gray-100 inline-block px-4 py-2 rounded-md border'
        >
          Home
        </Link>
        {!user && (
          <>
            <Link
              to='/register'
              className='text-gray-600 hover:bg-gray-100 inline-block px-4 py-2 rounded-md border'
            >
              Register
            </Link>
            <Link
              to='/login'
              className='text-gray-600 hover:bg-gray-100 inline-block px-4 py-2 rounded-md border'
            >
              Login
            </Link>
          </>
        )}

        {user && (
          <>
            <div className='border px-6 py-2 rounded flex items-center gap-4'>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className='w-10 h-10 rounded-full ring-4'
              />
              <p>{user.displayName}</p>
            </div>
            <button
              className='text-gray-600 hover:bg-gray-100 inline-block px-4 py-2 rounded-md border'
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  )
}
export default Navbar
