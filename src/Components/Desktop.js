import React from 'react';
import { carDetails } from './cars';
import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.8s ease;
transform: translateX(${(props) => props.slider * -100}vw);
`

function Desktop() {

    const [slider, setslider] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setslider(slider > 0 ? slider - 1 : 1);
        } else {
            setslider(slider < 1 ? slider + 1 : 0);
        }
    }

    return (
        <div>
            <div className="slider_wrapper">
                <Wrapper slider={slider}>
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
                </Wrapper>
            </div>

            <div className='arrowContainer'>
                <div className='arrow' onClick={() => (handleClick("left"))}>
                    <FaChevronLeft className='arrowicon' />
                </div>

                <div className='arrow' onClick={() => (handleClick("right"))}>
                    <FaChevronRight className='arrowicon' />
                </div>
            </div>
        </div>
    )
}

export default Desktop;