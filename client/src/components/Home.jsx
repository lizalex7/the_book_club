import { Link } from 'react-router-dom'
import wdimage from '../images/png/logo-color-wd.png'
import smimage from '../images/png/logo-color-sm.png'

export default function Home() {
  
  return (
    <section className="hero">
      <Link to="/books/">
      <img className="brand-logo" src={wdimage} alt="The Book Club Logo" />
      <img className="brand-logo-sm" src={smimage} alt="The Book Club Logo" />
      <h1 className='mobile-heading'>THE BOOK CLUB</h1>
      </Link>
    </section>
  )
}


