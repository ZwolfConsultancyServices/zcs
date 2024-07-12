import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pagesCss/Tech.css';

const images = [
  { src: '/images/html.jpeg', alt: 'HTML', title: 'HTML' },
  { src: '/images/css.jpeg', alt: 'CSS', title: 'CSS' },
  { src: '/images/js.jpeg', alt: 'JavaScript', title: 'JavaScript' },
  { src: '/images/react.jpeg', alt: 'React', title: 'React' },
  { src: '/images/angular.jpeg', alt: 'Angular', title: 'Angular' },
  { src: '/images/bootstrap.jpeg', alt: 'Bootstrap', title: 'Bootstrap' },
  { src: '/images/node.jpeg', alt: 'Node', title: 'Node' },
  { src: '/images/express.jpeg', alt: 'Express', title: 'Express' },
  { src: '/images/c.jpeg', alt: 'C++', title: 'C++' },
  { src: '/images/laravel.jpeg', alt: 'Laravel', title: 'Laravel' },
  { src: '/images/flutter.jpeg', alt: 'Flutter', title: 'Flutter' },
  { src: '/images/ionic.jpeg', alt: 'Ionic', title: 'Ionic' },
  { src: '/images/java.jpeg', alt: 'Java', title: 'Java' },
  { src: '/images/Android.jpeg', alt: 'Android', title: 'Android' },
  { src: '/images/swift.jpeg', alt: 'Swift', title: 'Swift' },
  { src: '/images/react.jpeg', alt: 'React Native', title: 'React Native' },
  { src: '/images/cms.jpeg', alt: 'CMS', title: 'CMS' },
  { src: '/images/firebase.jpeg', alt: 'Firebase', title: 'Firebase' },
  { src: '/images/MongoDB.jpeg', alt: 'MongoDB', title: 'MongoDB' },
  { src: '/images/sql.jpeg', alt: 'MySQL', title: 'MySQL' },
  { src: '/images/mssql.jpeg', alt: 'React', title: 'MS SQL' },
  { src: '/images/oracle.jpeg', alt: 'React', title: 'Oracle' },
  { src: '/images/mariadb.jpeg', alt: 'React', title: 'MariaDB' },
  { src: '/images/django.jpeg', alt: 'React', title: 'Django' },
];

const TechnologiesWeUse = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ctc">
      <div className="bwp">
        <div className="blue">
          <div className="tt">
            <h2> <strong>Technology we used</strong></h2>
          </div>
        </div>
        <div className="carousel-containers">
          <div className="carousel-wrapper">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div className="img" key={index}>
                  <img src={image.src} alt={image.alt} />
                  <p>{image.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
