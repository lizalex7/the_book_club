
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
      <h1 className="page-header">CREATE BOOK</h1>
      <Form className='form-container' method="POST">
        <label hidden htmlFor="name">Title</label>
        <input type="text" name="title" placeholder='Title' /><br></br>
        <label hidden htmlFor="author">Author</label>
        <input type="text" name="author" placeholder='Author' /><br></br>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea><br></br>
        <label hidden htmlFor="genre">Genre</label>
        <input type="text" name="genre" placeholder='Genre' /><br></br>
        {res?.statusText && <p className='danger bold mt-4'>{res.statusText}</p>}
        <button className="form-btn" type="submit">ADD TO LIBRARY</button>
      </Form>
    </>
  )
}