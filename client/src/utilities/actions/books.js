import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createBook(request){
  const data = await formToObj(request)
  return await axios.post('/api/books/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function editBook(request, id){
  const data = await formToObj(request)
  return await axios.put(`/api/books/${id}`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteBook(id){
  await axios.delete(`/api/books/${id}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/books/')
}