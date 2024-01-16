import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="footer">
      <Link to={'https://github.com/lizalex7'}> 
        <p>Liz Alexander | General Assembly | SEI 2023/24</p>
      </Link>
    </footer>
  )
}