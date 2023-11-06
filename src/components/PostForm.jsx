import { useForm, zodResolver } from "@mantine/form"
import { addDoc, collection } from "firebase/firestore"
import { z } from "zod"
import { db } from "../utils/firebase"

const PostForm = () => {
  const newPostSchema = z.object({
    title: z.string().min(5, "The title must be at least 5 characters long"),
    content: z
      .string()
      .min(15, "The content must be at least 15 characters long"),
  })

  const form = useForm({
    initialValues: {
      title: "",
      content: "",
    },
    validate: zodResolver(newPostSchema),
  })

  const handleSubmit = async (values) => {
    const collectionRef = collection(db, "posts")
    const doc = await addDoc(collectionRef, values)
    alert("Post added successfully", doc.id)
  }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <h1 className='text-xl font-bold'>Add New Post</h1>

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

      <button type='submit'>Add</button>
    </form>
  )
}
export default PostForm
