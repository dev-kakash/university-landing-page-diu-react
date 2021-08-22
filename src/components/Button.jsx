import React from "react";
import styled from "styled-components";

const Button = ({ text = "Apply Online" }) => {
  return (
    <ButtonStyle>
      <button>{text}</button>
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.div`
  button {
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--clr-primary-3);
    border-radius: 0.2rem;
  }
`;
