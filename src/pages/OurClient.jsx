import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../pagesCss/OurClient.css';

const OurClient = () => {
    const images = [
        '/images/pic1.jpeg',
        '/images/pic2.jpeg',
        '/images/pic3.jpeg',
        '/images/pic4.jpeg',
        '/images/pic5.jpeg',
        '/images/pic9.jpeg',
        '/images/pic7.jpeg',
        '/images/pic8.jpeg',
        // Add more images as needed
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 564, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <section className='mt-5 bg-light'>
            <div className='text-center pb-5'>
                <h2 className='fw-bold fs-1 pt-4 pb-2'>
                    Our <span className='text-primary main-hover'>Clients</span>
                </h2>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}  
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                >
                    {images.map((image, index) => (
                        <div className='client-card' key={index}>
                            <img src={image} alt={`Slide ${index}`} className="client-image" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default OurClient;
