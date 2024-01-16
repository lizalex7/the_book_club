
import { useLoaderData, Link, Form } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Helpers
import { activeUser } from '../utilities/helpers/common'

export default function SingleBook(){
  const book = useLoaderData()
  console.log(book)
  const { _id, title, author, description, genre } = book

  return (
    <Container fluid className='book-single'>
      <Row>
        {/* <Col md={6} className='single-image' style={{ backgroundImage: `url(${image})`}}></Col> */}
        <Col md={6} className='single-detail text-center'>
          {activeUser() === book &&
            <div>
              <Link to={`/books/${_id}/edit`}>🖊</Link>
              <Form method='POST'>
                <button>🗑</button>
              </Form>
            </div>
          }
          <div className='single-book-detail'>
            <h1 className='book-title'><mark>{title}</mark></h1>
            <p><span className='bold'>Author:</span>  {author}</p>
            <p><span className='bold'>Description:</span>  {description}</p>
            <p><span className='bold'>Genre:</span>  {genre}</p>
          {/* <p>Added by: {username}</p> */}
          </div>
          <Link className='back-btn' to="/books/">Back</Link>
        </Col>
      </Row>
    </Container>
  )
}