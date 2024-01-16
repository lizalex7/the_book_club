
import { useLoaderData, Link, Form } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Helpers
import { activeUser } from '../utilities/helpers/common'

export default function SingleBook() {
  const book = useLoaderData()
  const { _id, image, title, author, description, addedBy: { username } } = book

  return (
    <Container fluid className='book-single'>
      <Row>
        <Col md={6} className='single-img' style={{ backgroundImage: `url(${image})'`}}></Col>
        <Col md={6} className='single-detail-text-center'>
          {activeUser() === book.addedBy._id &&
          <div>
            <Link to={`/book/${_id}/edit`}></Link>
            <Form method='POST'>
              <button></button>
              </Form>
          </div>
        }
        <h1 className='text-center bold display-3 mb-4'>{title}</h1>
        <p>{author}</p>
        <p>{description}</p>
        <p>Owned by: {username}</p>
        <Link className='btn btn-blue' to='/book'>Back</Link>
        </Col>
      </Row>
    </Container>
  )
}