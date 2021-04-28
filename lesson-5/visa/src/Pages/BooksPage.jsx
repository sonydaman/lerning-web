/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import axios from "axios";
import { Spinner } from 'react-bootstrap';
export const BooksPage = () => {
    const uri = "https://jsonplaceholder.typicode.com/photos"
    const [PhotoData, setPhotoData] = useState([])
    useEffect(async () => {
       const {data} = await axios.get(uri);
      const result = data.filter((item,index)=>index<100  && item)
       setPhotoData(result)
       
    }, [])
    return (
        <>
           {
               PhotoData.length === 0 && (
                   <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
               )
           } 
            <div className="photo-container">
           {
               PhotoData.map(item=>{
                   return(
                       <div className="photo-item" key={item.id}>
                           <div className="photo-title">
                                {item.title}
                           </div>
                           <div className="photo-img">
                                <img src={item.thumbnailUrl} alt={item.thumbnailUrl} />
                           </div>
                        
                        </div>
                   )
               })
           }
           </div>
        </>
    )
}
