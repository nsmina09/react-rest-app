import React from 'react'
import Card from 'react-bootstrap/Card';

function Restreviw({ review }) {
  return (
    review.map(item => (
      <div >
        <Card className='mt-5 mx-2' border="secondary" style={{  float:'right'}}>
        <Card.Header>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle>{item.date}</Card.Subtitle> </Card.Header>
          <Card.Body>
          <Card.Text>
            {item.comments}
          </Card.Text>
         <Card.Header>
     rating {item.rating}
         </Card.Header>
        </Card.Body>
      </Card>
      </div>
    ))
  )
}

export default Restreviw