
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from './components/Nav'

function App() {
  
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
