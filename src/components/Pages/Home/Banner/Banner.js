import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner/banner1.jpg'
import banner2 from '../../../../images/banner/banner2.jpg'
import banner3 from '../../../../images/banner/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>HI THIS IS ZACSON</h4>
                        <p> GYM TRAINER</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Why you choose me? </h3>
                        <p>My education level and experience is crucial. I am the best Trainer in Bangladesh. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Specialties and Philosophies</h3>
                        <p>
                            <small>If you are passionate about a certain type of training like kickboxing or using kettlebells, you want to know that your trainer has experience with that</small>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;