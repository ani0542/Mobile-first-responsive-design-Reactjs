import React from 'react'
import room from "../assets/room.png"
import searchicon from "../assets/searchicon.png"
import  apartment from "../assets/apartment.png"
import Apartments from './Apartments'

function Hero() {
    return (
        <>
               <main>
                      <div class="hero">
                            <div class="hero__text-block">
                                   <div class="house-emoji">🏡</div>
                                        <h1>Book unique homes and experiences all over the world.</h1>
                                            <div class="search-block search-block--hero">
                                                <input type="text" placeholder="Try “Copenhagen, Denmark”"/>
                                                <img src={searchicon} alt="search-icon"/>
                                            </div>
                                        <div class="hero__btn-block">
                                            <button class="btn btn-success">All properties</button>
                                            <button class="btn btn-secondary">Homes</button>
                                            <button class="btn btn-secondary">Experiences</button>
                                            <button class="btn btn-secondary">Restaurants</button>
                                        </div>
                            </div>
                            <div class="hero__image-block">
                                <img src={room} alt="room"/>
                            </div>
                      </div>
                   
                      <Apartments/>
                  
               </main>
        </>
    )
}

export default Hero
