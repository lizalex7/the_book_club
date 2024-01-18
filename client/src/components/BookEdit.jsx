import { useEffect } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'

export default function BookEdit(){
  const res = useActionData()
  const navigate = useNavigate()
  const book = useLoaderData()

  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      console.log('UPDATED SUCCESSFULLY')
      navigate(`/books/${res.data.id}`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="page-header">Edit Book</h1>
      <Form className='form-container' method="POST">
        <label hidden htmlFor="name">Name</label>
        <input type="text" name="title" placeholder='Title' defaultValue={book.title} /><br></br>
        <label hidden htmlFor="origin">Author</label>
        <input type="text" name="author" placeholder='Author' defaultValue={book.author} /><br></br>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description' defaultValue={book.description}></textarea><br></br>
        <label hidden htmlFor="origin">Genre</label>
        <input type="text" name="genre" placeholder='Genre' defaultValue={book.genre} /><br></br>
        {res?.data?.message && <p className='danger'>{res.data.message}</p>}
        <button className="submit-btn" type="submit">Update book now</button>
      </Form>
    </>
  )
}