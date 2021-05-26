import React from 'react'
import Card from '../Components/Card'
import BlogData from "../data/blog.json";
import "..//Css/Blog.css"
export const Blog = () => {
    const {heroImg,cards} =  BlogData;
    return (
        
        <div className="blog-page">
            <div className="hero-img">
                <img src={heroImg} alt="hero-image" />
            </div>
            <div className="sections">
                {
                    cards.map((card)=>{
                        return <Card cards={card} />
                    })
                }
                
           
            </div>
        </div>
    )
}

