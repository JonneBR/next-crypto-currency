import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background-color: #000;
  color: #fff;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/'>
          <a>NCC</a>
        </Link>
      </div>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
