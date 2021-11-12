import React from 'react';
import { Carousel } from 'react-bootstrap';
import bg1 from '../../../images/bg-1.jpg'
import bg2 from '../../../images/bg-2.jpg'
import bg3 from '../../../images/bg-3.jpg'

const Banner = () => {
    return (
        <Carousel className="my-5">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "800px"}}
                    src={bg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "800px"}}
                    src={bg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "800px"}}
                    src={bg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;