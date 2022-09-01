import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { links } from '../const/links';

import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const MainNavigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <NavbarStyles>
      <div className='nav-header'>
        <img src='https://dcassetcdn.com/design_img/2453268/83087/83087_12874298_2453268_6dc46ddf_image.jpg' className='logo' alt='logo' />
        <button
          className='nav-toggle'
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`${
          showLinks ? 'links-container show-container' : 'links-container'
        }`}
      >
        <ul className='links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive ? undefined : undefined  /*TODO fix active style for navlinks */
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </NavbarStyles>
  );
};

const NavbarStyles = styled.nav`
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    color: rgb(0, 13, 114);
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      color: rgb(181, 181, 255);
      transform: rotate(90deg);
    }
  }
  .logo {
    height: 60px;
    object-fit: cover;
    width: 250px;
    object-position: -50px -55px;
    
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 15rem; /*TODO make it dynamic */
  }
  .links a {
    color: hsl(209, 34%, 30%);
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
    &:hover {
      background: hsl(210, 31%, 80%);
      color: hsl(210, 22%, 49%);
      padding-left: 1.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export default MainNavigation;
