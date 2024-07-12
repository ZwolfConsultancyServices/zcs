import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pagesCss/Zcarousel.css';

const Zcarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const crousalsImages = [
        "/images/Second.jpg",
        "/images/Fourth.jpg",
        "/images/Third.jpg",
        "/images/first.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % crousalsImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [crousalsImages.length]);

    return (
        <main className="new-sec bg-dark mb-4">
            <ul className="slide">
                {crousalsImages.map((imageItem, index) => (
                    <li key={index} className={`item ${index === currentIndex ? 'slide-animation' : ''}`}>
                        <img src={imageItem} alt={`crousalsImages ${index + 1}`} className="img-fluid" />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Zcarousel;
