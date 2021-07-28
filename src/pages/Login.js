import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/githubLogin.png';
const Login = () => {
  return (
  <Wrapper>
      <div className="container">
          <img src={loginImg} alt="Github User" />
          <h1>Github User</h1>
          <button className="btn">Login</button>
      </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  background: linear-gradient(to top ,#B5FCFE, #FFFFFF);
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
    width: auto;
    height: 50vh;
    // margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;