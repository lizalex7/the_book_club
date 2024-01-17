
import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'

export default function BookCreate(){
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/books/`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="library">CREATE BOOK</h1>
      <Form className='form' method="POST">
        <label hidden htmlFor="name">Title</label>
        <input type="text" name="title" placeholder='Title' />
        <label hidden htmlFor="author">Author</label>
        <input type="text" name="author" placeholder='Author' />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
        <label hidden htmlFor="genre">Genre</label>
        <input type="text" name="genre" placeholder='Genre' />
        {res?.statusText && <p className='danger bold mt-4'>{res.statusText}</p>}
        <button type="submit">ADD TO LIBRARY</button>
      </Form>
    </>
  )
}