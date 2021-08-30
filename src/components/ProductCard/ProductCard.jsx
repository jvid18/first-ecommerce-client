import React from 'react'
import {Button, Card} from 'react-bootstrap'
import './productCard.css'

const ProductCard = ({ name, description }) => (
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" alt={ name } />
    <Card.Body>
      <Card.Title>{ name }</Card.Title>
      <Card.Text>
        { description }
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
)
export default ProductCard
