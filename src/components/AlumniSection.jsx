import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { alumniData } from "../staticData/navOneData";
import Header from "./Header";
import styled from "styled-components";

const AlumniSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,
  };
  return (
    <AlumniStyle>
      <Header
        title="Alumni"
        text="Our Alumni are our pride as they are engaged in building the world through national and International contributions"
      />
      <Slider {...settings}>
        {alumniData.map((item, index) => {
          const { image, name, position } = item;
          return (
            <div className="alumni-wrapper">
              <img src={image} alt={name} />
              <h6>{name}</h6>
              <p>{position}</p>
            </div>
          );
        })}
      </Slider>
    </AlumniStyle>
  );
};

export default AlumniSection;

const AlumniStyle = styled.div`
  .alumni-wrapper {
    text-align: center;
    padding: 1rem;
    img {
      width: 430px;
      height: 430px;
      margin-bottom: 1rem;
      transition: 350ms ease;

      &:hover {
        transform: translateY(-1rem);
      }
    }
    h6 {
      font-size: 23px;
      font-weight: 600;
    }
    p {
      color: var(--text-color-1);
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;
