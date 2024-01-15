import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [ books, setBooks ] = useState([])
  
  useEffect(() => {
    async function getBookData(){
      try {
        const res = await axios.get('')
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getBookData()
  }, [])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
