import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CarouselComp() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [juices, setJuices] = useState([]);

  useEffect(() => {
    const getJuices = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/juices?cat=juices`,
      });
      setJuices(response.data);
    };
    getJuices();
  }, []);

  return (
    <div className="carousel-juices ">
      <Slider {...settings}>
        {juices.map((juice) => (
          <div key={juice.id} className="">
            <Link className="" to={`/product/${juice.slug}`}>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/${juice.image}.jpg`}
                className="carousel-img"
                alt=""
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComp;
