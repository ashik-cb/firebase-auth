import { deleteDoc, doc } from "firebase/firestore"
import { useUser } from "../providers/AuthProvider"
import { db } from "../utils/firebase"

const Post = ({ title, content, author, id, thumbnail, onEdit }) => {
  const { user } = useUser()

  const onDelete = async () => {
    const sure = confirm("Are you sure you want to delete this post?")
    if (sure) {
      const documentRef = doc(db, "posts", id)
      await deleteDoc(documentRef)
      alert("Post deleted successfully")
    }
  }

  return (
    <div className='border rounded-md p-6'>
      <img src={thumbnail} alt='' />
      <h3 className='text-xl font-bold'>{title}</h3>
      <p>{content}</p>
      {author === user.uid && (
        <>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
        </>
      )}
    </div>
  )
}
export default Post
