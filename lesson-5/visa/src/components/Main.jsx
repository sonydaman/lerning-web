import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.css'
import { Button, Card, CardDeck, Form, FormControl } from 'react-bootstrap';
import { BreadCrumb } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faShareSquare } from '@fortawesome/free-solid-svg-icons'


export const Main = () => {
  const UserFullName = ["Rohit Sharma", "Krishan Kumar", "Manpreet Singh", "Aditya Chouhan"]
  return (
    <div className='main-div'>

      <BreadCrumb pageName="Dashboard" />
      <h4>All Posts</h4>
      <div className="all-post">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://unsplash.it/190/280?id=1" />
            <Card.Body>
              <Card.Title>Sonu Yadav</Card.Title>
              <Card.Text>
                This is my new status.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Recently Updated</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://unsplash.it/190/280?id=2" />
            <Card.Body>
              <Card.Title>Gurpreet Singh</Card.Title>
              <Card.Text>
                Hi Friends...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://unsplash.it/190/280?id=3" />
            <Card.Body>
              <Card.Title>Shahrukh Khan</Card.Title>
              <Card.Text>
                Good Morning Fans..!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 21 hours ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://unsplash.it/190/280?id=4" />
            <Card.Body>
              <Card.Title>Rahul</Card.Title>
              <Card.Text>
                Feeling happy
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated yesterday</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="post-new">
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input isValid />
              <Form.File.Label data-browse="Post">
                Choose your Photos and Videos to post on your feeds...
              </Form.File.Label>
              <Form.Control.Feedback type="valid">Let's do Something new for you!</Form.Control.Feedback>
            </Form.File>
          </div>
        </div>
        {
          UserFullName.map((name, index) => {
            const result = {
              name,
              index,
              img: `https://unsplash.it/700/400?id=${index}`
            }
            return (

              <div key={result.index} className="container">
                {result.name}

                <div className="posted-img">
                  <img src={result.img} alt="" />
                </div>
                <div className="button-section">
                  <div className="mb-2">

                    <Button variant="outline-info">
                      <FontAwesomeIcon icon={faHeartbeat} />
                    </Button>
                  </div>
                  <div className="mb-2">
                    <FormControl type="text" placeholder="Comment...." className="mr-sm-2" />
                  </div>

                  <div className="mb-2">

                    <Button variant="outline-info">
                      <FontAwesomeIcon icon={faShareSquare} />
                    </Button>
                  </div>
                </div>
              </div>

            )
          }
          )}
      </div>
    </div>
  )
}