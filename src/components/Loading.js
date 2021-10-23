import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Wrapper className="loading"></Wrapper>;
};

const Wrapper = styled.div`
  margin: 50px auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: transparent;
  border: 10px solid var(--clr-primary-8);
  border-top: 10px solid transparent;
  animation: loading 1s linear 0s infinite;

  @media (max-width: 350px) {
    width: 200px;
    height: 200px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
