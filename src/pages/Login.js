import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/githubLogin.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="Github User" />
        <h1>Github User</h1>
        <button className="btn" onClick={loginWithRedirect}>
          LOGIN
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin: auto;
    width: 500px;
    height: auto;
    // margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    img {
      width: 200px;
      height: auto;
    }
  }
`;
export default Login;
