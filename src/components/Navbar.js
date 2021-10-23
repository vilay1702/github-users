import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      <div className="brand">
        {isUser && user.picture && <img src={user.picture} />}
        {isUser && user.name && (
          <h4>
            <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}
      </div>
      <div className="toggle-button">
        {isUser ? (
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            LOGOUT
          </button>
        ) : (
          <button onClick={loginWithRedirect}>LOGIN</button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem 5vw;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  .brand {
    display: flex;
    align-items: center;
  }
  .brand > h4 {
    margin-left: 1rem;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-8);
    color: var(--clr-white);
    transition: var(--transition);
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: var(--clr-primary-5);
    }
  }
`;

export default Navbar;
