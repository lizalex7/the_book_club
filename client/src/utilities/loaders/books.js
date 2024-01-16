import axios from "axios"

export async function getAllBooks(){
  const res = await axios.get('/api/books/')
  return res.data
}

export async function getSingleBook(id){
  const res = await axios.get(`/api/books/${id}`)
  return res.data
}