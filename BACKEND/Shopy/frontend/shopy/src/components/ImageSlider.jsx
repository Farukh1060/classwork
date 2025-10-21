import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shopping from '../assets/shopping.png';
import women from '../assets/women.png';
import sale from '../assets/sale.png';



// ✅ Array of image paths
const images = [
  women,
  shopping,
  sale,
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    
  };

  return (<div className='relative overflow-hidden'>
    <div className=' md:h-[550px] md:max-h-full  sm:aspect-square bg-orange-200 rotate-45 absolute  md:-top-[120px] right-[40px] rounded-2xl z-[-2] overflow-hidden '></div>
    <div className='max-w-7xl mx-auto px-4 w-full lg:px-8'> 
      <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index}>
          <div className=' flex flex-col md:flex-row md:justify-between md:items-center '>

            <div className="">
               <div className="max-w-sm mx-auto p-6 rounded-lg ">
                <h2 className="text-5xl font-bold mb-2 text-gray-800">30% off on all women wear</h2>
                <p className="text-gray-600 mb-4"> This is a short description of the awesome product you're about to order.</p>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-300 transition">Order Now</button>
               </div>
            </div>
            <div>
              <img  className="" src={image} alt={`Slide ${index + 1}`} />
            </div>

          </div>
          
        </div>
      ))}
    </Slider>
    </div>
   </div> 
  );
};

export default ImageSlider;
