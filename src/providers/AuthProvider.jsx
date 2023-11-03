import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebase"

export const AuthContext = createContext({
  user: null,
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export const useUser = () => {
  const context = useContext(AuthContext)
  return context
}
