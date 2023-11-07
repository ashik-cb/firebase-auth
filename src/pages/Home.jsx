import { collection } from "firebase/firestore"
import { useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import Post from "../components/Post"
import PostForm from "../components/PostForm"
import { useUser } from "../providers/AuthProvider"
import { db } from "../utils/firebase"

const Home = () => {
  const { user } = useUser()
  const [res, loading, error] = useCollection(collection(db, "posts"))
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editContent, setEditContent] = useState("")

  return (
    <div>
      This is Home Page
      {editId ? (
        <PostForm id={editId} title={editTitle} content={editContent} />
      ) : (
        <PostForm />
      )}
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <h2 className='text-2xl'>Posts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4'>
          {res &&
            !error &&
            !loading &&
            res.docs.map((doc) => (
              <Post
                onEdit={() => {
                  setEditId(doc.id)
                  setEditTitle(doc.data().title)
                  setEditContent(doc.data().content)
                }}
                {...doc.data()}
                id={doc.id}
                key={doc.id}
              />
            ))}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  )
}
export default Home
