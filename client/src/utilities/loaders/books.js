export async function getAllBooks(){
  const res = await fetch('/api/books/')
  console.log(res)
  return res.json()
}