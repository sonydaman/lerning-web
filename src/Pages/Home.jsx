/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Image } from 'semantic-ui-react';
import Card from '../Components/Card'
import HomeData from "../data/home.json";
import { HomeStyled } from '../Styles/Home';
export const Home = () => {
    const {heroImg,cards} = HomeData;
    return (
        <HomeStyled>
        <div className="home-page">
        
            <div className="hero-img">
                <Image src= {heroImg} fluid />
            </div>
            <div className="sections">
                {
                    cards.map((card)=>{
                        return <Card cards={card} />
                    })
                }
                
                {/* <div className="section">
                    <h1>Heading 1</h1>
                    <img src="https://unsplash.it/300/300" alt="section-img" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quia perferendis voluptates inventore magni vel vitae dolorem in. Quaerat minima tempore repellendus quia similique quasi enim officiis. Dignissimos, hic eos?</p>

                </div>
                <div className="section">
                    <h1>Heading 1</h1>
                    <img src="https://unsplash.it/300/300" alt="section-img" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quia perferendis voluptates inventore magni vel vitae dolorem in. Quaerat minima tempore repellendus quia similique quasi enim officiis. Dignissimos, hic eos?</p>

                </div>
                <div className="section">
                    <h1>Heading 1</h1>
                    <img src="https://unsplash.it/300/300" alt="section-img" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quia perferendis voluptates inventore magni vel vitae dolorem in. Quaerat minima tempore repellendus quia similique quasi enim officiis. Dignissimos, hic eos?</p>

                </div> */}
            </div>
        </div>
        </HomeStyled>
    )
}
