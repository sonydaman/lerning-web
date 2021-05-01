import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.css'
import { Button } from 'react-bootstrap';
import { BreadCrumb } from '.';

export const Main = () => {
  const UserFullName = ["Rohit Sharma","Krishan Kumar", "Manpreet Singh","Aditya Chouhan"]
    return (   
      <div className='main-div'>
        <BreadCrumb pageName="Dashboard" />
        <h2>All Posts</h2>
        <div className="all-post">
      {
      UserFullName.map((name,index) =>{
         const result = { name,
                          index,
                          img:`https://unsplash.it/700/400?id=${index}`
                        }
        return(     
          
          <div key={result.index} className="container">
              {result.name}
              
              <div className="posted-img">
                  <img src={result.img} alt=""/>    
              </div>
              <div className="button-section">
              <div className="mb-2">
                <Button variant="secondary" size="lg">
                  Like
                </Button>
              </div>
              <div className="mb-2">
                <Button variant="secondary" size="lg">
                  Like
                </Button>
              </div>
              </div>
          </div>
          
    )}
  )}
  </div>
</div>
)
}