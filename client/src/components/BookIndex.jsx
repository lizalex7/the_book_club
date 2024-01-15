import { useLoaderData } from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function BookIndex() {
  const book = useLoaderData()
  console.log(book)
  return (
    <main>
      <h1 className="library">THE LIBRARY</h1>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </main>
  )
}