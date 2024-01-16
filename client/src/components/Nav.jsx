import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// // Images
// import logoIcon from '../images/logo-icon.png'

// Bootstrap components
import Modal from 'react-bootstrap/Modal'

// Helpers
import { activeUser, removeToken } from '../utilities/helpers/common'

export default function Nav() {

  const navigate = useNavigate()

// ! State
  const [show, setShow] = useState(false)

  function handleLogOut(){
    // Remove token from storage
    removeToken()
    // Navigate to the log in page
    navigate('/')
  }

  return (
    <>
      <header className='navbar'>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)} className='link-container'>
            <Link to="/books">BOOKS</Link>
            { activeUser() ?
              <>                
                <span className='logout' onClick={handleLogOut}>Log out</span>
              </>
              :
              <>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
              </>
            }
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )

}

