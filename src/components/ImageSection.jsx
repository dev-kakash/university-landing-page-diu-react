import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ImageSection = ({ image, title, text, buttonText }) => {
  return (
    <ImageSectionStyle>
      <div className="image-wrapper">
        <img src={image} alt={title} />
        <h6>{title}</h6>
        <p>{text}</p>
        <Button text={buttonText} />
      </div>
    </ImageSectionStyle>
  );
};

export default ImageSection;

const ImageSectionStyle = styled.div`
  .image-wrapper {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h6 {
      font-size: 24px;
      margin-top: 1rem;
    }
    p {
      font-size: 16px;
      margin-top: 1rem;
      font-weight: 400;
    }
  }
`;
