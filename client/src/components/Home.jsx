import { Link } from 'react-router-dom'
import bgimage from '../images/png/bg-logo-color.png'

export default function Home() {
  
  return (
    <div className='image-container'>  
      <Link to='/books/'>
        <img src={bgimage} alt="The Book Club Logo" />
      </Link>
    </div>
  )
}
