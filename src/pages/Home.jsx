import { useUser } from "../providers/AuthProvider"

const Home = () => {
  const { user } = useUser()

  return (
    <div>
      This is Home Page
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
export default Home
