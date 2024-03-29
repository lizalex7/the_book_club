import { useLoaderData, Link } from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function BookIndex() {
  const book = useLoaderData()
  console.log(book)

  return (
    <>
      <h1 className='page-header'>THE LIBRARY</h1>
      <Container fluid>
        <Row className='book-list'>
          { book.map(book => {
            const { id, image } = book
            return (
            <Col 
              as={Link}
              key={id} 
              xs={6}
              md={4}
              lg={3}
              style={ { backgroundImage: `url(${image})` } }
              to={`/books/${id}`}
            >
            </Col>
          )
        })}
        </Row>
      </Container>
    </> 
  )
}