import React from 'react';
import { Carousel } from 'react-bootstrap'; // Bootstrap Carousel component

const SlideExample = () => {
    const exampleCarouselImages = [
        {
            src: "assets/home0.jpg", // Image showing a vibrant campus or Romanian cultural landmark
            label: "Study In Romania",
            description: "Embark on an unforgettable academic journey in Romania! Experience world-class education, cultural diversity, and a vibrant student community in one of Europe’s most captivating destinations."
        },
        
        {
            src: "assets/home4.jpg", // Original image 2
            label: "A Thriving Student Community",
            description: "Join a diverse and inclusive community of students from around the world, where lifelong friendships are made and ideas are exchanged."
        },
        {
            src: "assets/home.jpg", // Original image 3
            label: "State-of-the-Art Facilities",
            description: "Benefit from cutting-edge facilities, modern classrooms, and research centers designed to support academic excellence and innovation."
        }
    ];

    // Inline styles for carousel images and captions
    const imageStyle = {
        maxHeight: '80vh',
        objectFit: 'cover',
        filter: 'brightness(0.8)' // Darken image for readability
    };

    const captionStyle = {
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '60%',
        textAlign: 'left',
        color: '#ffffff'
    };

    const h1Style = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5em',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
    };

    const pStyle = {
        fontSize: '1.25rem',
        fontWeight: '300',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
        maxWidth: '600px',
        lineHeight: '1.5'
    };

    return (
        <Carousel fade>
            {exampleCarouselImages.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        style={imageStyle}
                        src={slide.src}
                        alt={slide.label}
                    />
                    <Carousel.Caption style={captionStyle}>
                        <h1 style={h1Style}>{slide.label}</h1>
                        <p style={pStyle}>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default SlideExample;
