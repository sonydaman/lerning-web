import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.css'
import { Button, Card } from 'react-bootstrap';

export const Main = () => {
    return (
        <div className="main-div">
            <div className="card-1">

            <Card style={{ width: '60rem', innerHeight: '60rem'}}>
            <Card.Title>Mr. Rajesh Kumar</Card.Title>
             <Card.Img variant="top" width="40rem" src="https://unsplash.it/1350/600?id=1" />

             
            <Card.Body>
            
               <Card.Text>
                 How you are feeling about this beautifull image?
               </Card.Text>
             </Card.Body>
             <Card.Body>
             <div className="mb-2">
                 <Button variant="secondary" size="lg">
                   LIKE
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   COMMENT
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   SHARE
                 </Button>
            </div>
             </Card.Body>
            </Card>
            </div>
            <div className="card-1">

            <Card style={{ width: '60rem', innerHeight: '40rem'}}>
            <Card.Title>Mr. Neeraj Kumar</Card.Title>
             <Card.Img variant="top" width="40rem" src="https://unsplash.it/1350/600?id=2" />

             
            <Card.Body>
            
               <Card.Text>
                 How you are feeling about this beautifull image?
               </Card.Text>
             </Card.Body>
             <Card.Body>
             <div className="mb-2">
                 <Button variant="secondary" size="lg">
                   LIKE
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   COMMENT
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   SHARE
                 </Button>
            </div>
             </Card.Body>
            </Card>
            </div>
            <div className="card-1">

            <Card style={{ width: '60rem', innerHeight: '40rem'}}>
            <Card.Title>Mr. Sahil Gautam</Card.Title>
             <Card.Img variant="top" width="40rem" src="https://unsplash.it/1350/600?id=3" />

             
            <Card.Body>
            
               <Card.Text>
                 How you are feeling about this beautifull image?
               </Card.Text>
             </Card.Body>
             <Card.Body>
             <div className="mb-2">
                 <Button variant="secondary" size="lg">
                   LIKE
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   COMMENT
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   SHARE
                 </Button>
            </div>
             </Card.Body>
            </Card>
            </div>

            <div className="card-1">

            <Card style={{ width: '60rem', innerHeight: '40rem'}}>
            <Card.Title>Mr. Mukesh Kumar</Card.Title>
             <Card.Img variant="top" width="40rem" src="https://unsplash.it/1350/600?id=4" />

             
            <Card.Body>
            
               <Card.Text>
                 How you are feeling about this beautifull image?
               </Card.Text>
             </Card.Body>
             <Card.Body>
             <div className="mb-2">
                 <Button variant="secondary" size="lg">
                   LIKE
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   COMMENT
                 </Button>{' '}
                 <Button variant="secondary" size="lg">
                   SHARE
                 </Button>
            </div>
             </Card.Body>
            </Card>
            </div>
        </div>
    )
}