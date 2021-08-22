import React from "react";
import styled from "styled-components";

const Header = ({ title = "HEllo", text = "lorem ipsum" }) => {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      <p>{text}</p>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  padding: 5rem 0;

  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  p {
    font-size: 18px;
    line-height: 20px;
  }
`;
