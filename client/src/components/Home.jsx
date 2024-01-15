import { Link } from 'react-router-dom'
import bgimage from '../images/png/bg-logo-color.png'

export default function Home() {
  
  return (
    <Link to='/books/'>
      <div className='image-container'>
        <img src={bgimage} alt="The Book Club Logo" />
      </div>
    </Link>
  )
}
