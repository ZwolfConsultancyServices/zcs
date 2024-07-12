import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../pagesCss/WhyCUs.css";

const details = [
  {
    title: "Expertise and Experience",
    img: "/images/expertise.jpeg",
    detail:
      "With 3 years in consulting, we excel in [specific industries/types of clients], offering tailored strategies informed by deep sector insights.",
  },
  {
    title: "Customized Solutions",
    img: "/images/customized.jpeg",
    detail:
      "No two businesses are alike. We listen to your unique needs, crafting strategies that align with your goals for measurable results.",
  },
  {
    title: "Proven Track Record",
    img: "/images/trackrecord.jpeg",
    detail:
      "Our success is your success. We achieve objectives like efficiency gains and growth. Explore [case studies/testimonials] for examples.",
  },
  {
    title: "Comprehensive Services",
    img: "/images/solution.jpeg",
    detail:
      "From strategy to tech implementation, our integrated approach ensures seamless execution and maximum impact.",
  },
  {
    title: "Innovative Approaches",
    img: "/images/innovative.jpeg",
    detail:
      "Stay competitive with cutting-edge solutions leveraging the latest tools and methodologies for continuous improvement.",
  },
  {
    title: "Client-Centric Focus",
    img: "/images/clientfocus.jpeg",
    detail:
      "Your success is our priority. We build strong, collaborative relationships, ensuring your needs are met and expectations exceeded.",
  },
  {
    title: "Global Reach",
    img: "/images/reach.jpeg",
    detail:
      "Benefit from global insights and local expertise, supporting your business growth whether local or multinational.",
  },
  {
    title: "Ethical and Transparent",
    img: "/images/ethicalnT.jpeg",
    detail:
      "We operate with integrity and transparency, ensuring clear communication and trust in every solution we provide.",
  },
  {
    title: "Competitive Pricing",
    img: "/images/pricing.jpeg",
    detail:
      "Quality consulting needn’t break the bank. Our competitive pricing delivers excellent value without compromising on quality.",
  },
  {
    title: "Continuous Support",
    img: "/images/support.jpeg",
    detail:
      "Our commitment extends beyond delivery, offering ongoing support to ensure sustained success and adaptability to change.",
  },
];

const WhyCUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="why-choose-us bg-light mt-5 pt-4 pb-5">
      <h2 className="fw-bold fs-1 pb-5 text-center">
        Why
        <span className="text main-hover"> Choose Us </span>
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
        slidesToSlide={1}
      >
        {details.map((item, index) => (
          <div
            key={index}
            className={`cardsss ${index % 2 === 0 ? "bg-color1" : "bg-color2"}`}
            style={{ marginTop: index % 2 === 0 ? 0 : "100px" }}
          >
            <div className="card-content">
              <h3 className="texts">{item.title}</h3>
              <img src={item.img} alt={item.img} className="card-images" />
              <p className="ptext">{item.detail}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default WhyCUs;
