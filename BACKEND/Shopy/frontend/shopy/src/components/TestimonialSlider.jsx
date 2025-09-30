// TestimonialSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "CEO at TechCorp",
    content: "This product completely changed our workflow. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Marketing Lead at StartUpX",
    content: "Amazing customer support and great experience overall.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Carol White",
    title: "Product Manager at Innovate Ltd.",
    content: "Very intuitive and well-designed. We use it every day!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Alice Johnson",
    title: "CEO at TechCorp",
    content: "This product completely changed our workflow. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 5,
    name: "Bob Smith",
    title: "Marketing Lead at StartUpX",
    content: "Amazing customer support and great experience overall.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 6,
    name: "Carol White",
    title: "Product Manager at Innovate Ltd.",
    content: "Very intuitive and well-designed. We use it every day!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // You can change to 2 or 3 for wider screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id}>
            <div className="bg-white shadow-lg rounded-lg p-6 mx-2 flex flex-col items-center text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{t.content}"</p>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

