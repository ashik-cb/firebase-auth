import { useForm, zodResolver } from "@mantine/form"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { useEffect } from "react"
import { z } from "zod"
import { useUser } from "../providers/AuthProvider"
import { db } from "../utils/firebase"

const PostForm = ({ id, title, content }) => {
  const newPostSchema = z.object({
    title: z.string().min(5, "The title must be at least 5 characters long"),
    content: z
      .string()
      .min(15, "The content must be at least 15 characters long"),
  })

  const form = useForm({
    initialValues: {
      title: title || "",
      content: content || "",
    },
    validate: zodResolver(newPostSchema),
  })

  useEffect(() => {
    form.setValues({
      title: title || "",
      content: content || "",
    })
  }, [id])

  const { user } = useUser()

  const handleSubmit = async (values) => {
    const collectionRef = id ? doc(db, "posts", id) : collection(db, "posts")
    if (id) {
      const doc = await updateDoc(collectionRef, values)
      alert("Post updated successfully")
    } else {
      const doc = await addDoc(collectionRef, {
        ...values,
        author: user.uid,
      })
      form.reset()
      alert("Post added successfully" + doc.id)
    }
  }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <h1 className='text-xl font-bold'>{id ? "Update" : "Add new"} Post</h1>

      <input
        type='text'
        {...form.getInputProps("title")}
        placeholder='Enter Title'
      />
      {form.errors.title && <p className='text-red-500'>{form.errors.title}</p>}

      <textarea
        placeholder='Enter Content'
        {...form.getInputProps("content")}
      ></textarea>
      {form.errors.content && (
        <p className='text-red-500'>{form.errors.content}</p>
      )}

      <button type='submit'>{id ? "Update" : "Add"}</button>
    </form>
  )
}
export default PostForm
