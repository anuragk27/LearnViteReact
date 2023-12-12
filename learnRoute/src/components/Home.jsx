import React from 'react'
import './Home.css'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import image1 from './images/india.jpg'
import image2 from './images/japan.jpg'
import image3 from './images/paris.jpg'
export const Home = () => {
  return (
    <>
    <div className='cards'>

      <div className='card1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} style={{width:"100%", height:"200px"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Click</Button>
      </Card.Body>
    </Card> 
    </div>

    <div className='card1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Click</Button>
      </Card.Body>
    </Card> 
    </div>

    <div className='card1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Click</Button>
      </Card.Body>
    </Card> 
    </div>

     </div>
    
    
    </>
    
  )
}
