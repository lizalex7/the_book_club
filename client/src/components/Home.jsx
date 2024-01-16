import { Link } from 'react-router-dom'
import bgimage from '../images/png/bg-logo-color.png'

export default function Home() {
  
  return (
    <section className="hero">
      <Link to="/books/">
      <img className="brand-logo" src={bgimage} alt="The Book Club Logo" width={1200} />
      </Link>
    </section>
  )
}

{/* <Link to='/books/'>
<img src={bgimage} alt="The Book Club Logo" />
</Link> */}

{/* <section className="centred">
<img className="brand-logo" src={brandLogo} alt="Breadbored full logo" width={350} />
<Link to="/bread" className='btn btn-pink'>View bread</Link>
</section> */}

