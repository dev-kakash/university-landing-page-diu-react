import React from "react";
import styled from "styled-components";
import { galleryData } from "../staticData/navOneData";

const Gallery = () => {
  return (
    <GalleryStyle>
      <div className="row gallery-wrapper">
        {galleryData.map((item, index) => {
          return (
            <div className="col-3 item-wrapper">
              <img src={item} alt="related" />
            </div>
          );
        })}
      </div>
    </GalleryStyle>
  );
};

export default Gallery;

const GalleryStyle = styled.div`
  padding: 5rem 0 0 0;
  .gallery-wrapper {
    gap: 0;

    .item-wrapper {
      img {
        width: 106%;
        height: 350px;
      }
    }
  }
`;
