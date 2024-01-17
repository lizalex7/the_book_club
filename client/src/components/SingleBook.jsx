
import { useLoaderData, Link, Form } from 'react-router-dom'
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Helpers
import { loggedInUserID } from '../utilities/helpers/common'

export default function SingleBook(){
  const book = useLoaderData()
  const {id, title, author, description, genre, owner: { username } } = book
  console.log(id, title, author, description, genre, username)

  return (
    <Container fluid className='book-single'>
      <Row>
        {/* <Col md={6} className='single-image' style={{ backgroundImage: `url(${image})`}}></Col> */}
        <Col> 
          <div className='single-book-detail'>
            <h1 className='book-title'><mark>{title}</mark></h1>
            <p><span className='bold'>Author:</span>  {author}</p>
            <p><span className='bold'>Description:</span>  {description}</p>
            <p><span className='bold'>Genre:</span>  {genre}</p>
            <p><span className='bold'>Added by:</span>  {username}</p>
          </div>
          {loggedInUserID() === book.owner.id &&
            <div>
              <Link to={`/books/${id}/edit/`}>UPDATE BOOK</Link>
              <Form method='POST'>
                <button className='delete-btn'>DELETE BOOK</button>
              </Form>
            </div>
          }
          <Link className='back-btn' to="/books/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
}
