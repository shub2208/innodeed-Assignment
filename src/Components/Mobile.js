import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { carDetails } from './cars';
import "react-alice-carousel/lib/alice-carousel.css";


function Mobile() {
    return (
            
                <div className='slider_wrapper'>
                <AliceCarousel autoPlay autoPlayInterval={1000}>
                {carDetails.map((cars) => (
                    
                    <div className='slider'>
                        <h3 className='bodytype'>{cars.bodyType}</h3>
                        <div className='textContainer'>
                            <h2 className='modelname'>{cars.modelName}</h2>
                            <p>{cars.modelType}</p>
                        </div>
                        <div className='imageContainer'>
                            <img className='image' src={cars.imageUrl} alt={cars.modelName} />
                        </div>
                        <div className='bottomMenu'>
                            <div className='button'>LEARN</div>
                            <div className='button'>SHOP</div>
                        </div>
                    </div>
                    
                ))}
                </AliceCarousel>
                
                </div>

    )
}

export default Mobile;