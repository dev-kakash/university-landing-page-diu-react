import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Slider from "../images/slider.jpg";
import Button from "./Button";

const Hero = () => {
  const { removeOver } = useGlobalContext();

  return (
    <HeroStyle onMouseOver={removeOver}>
      <div className="hero-wrapper">
        <div className="contents">
          <h1>Education is the most powerful weapon</h1>
          <p>Nelson Mandela</p>
          <Button />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;

const HeroStyle = styled.div`
  margin-top: -0.5rem;
  width: 100%;
  height: 700px;
  background-image: linear-gradient(
      to bottom,
      rgba(119, 120, 121, 0.349),
      rgba(105, 104, 104, 0.418)
    ),
    url(${Slider});
  background-size: cover;
  position: relative;

  .contents {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 3.5rem;
      color: white;
      font-weight: 600;
      width: 50%;
    }
    p {
      color: white;
      font-size: 1.3rem;
    }
  }
`;
