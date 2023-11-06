import { collection } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import PostForm from "../components/PostForm"
import { useUser } from "../providers/AuthProvider"
import { db } from "../utils/firebase"

const Home = () => {
  const { user } = useUser()
  const [res, loading, error] = useCollection(collection(db, "posts"))

  return (
    <div>
      This is Home Page
      <PostForm />
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <h2 className='text-2xl'>Posts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4'>
          {res &&
            !error &&
            !loading &&
            res.docs.map((doc) => (
              <div className='border rounded-md p-6' key={doc.id}>
                <h3 className='text-xl font-bold'>{doc.data().title}</h3>
                <p>{doc.data().content}</p>
              </div>
            ))}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  )
}
export default Home
