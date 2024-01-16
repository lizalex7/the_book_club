
import { Outlet, useNavigation } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from './components/Nav'
import Spinner from 'react-bootstrap/Spinner'

function App() {

  const navigation = useNavigation()
  
  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
          <Outlet />
          :
          <div className="spinner">
            <Spinner animation='border' />
          </div>
}
      </main>
      <Footer />
    </>
  )
}

export default App
