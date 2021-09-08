import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import withAuth from './Auth/withAuth';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Login() {
  const Router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      Router.replace('/');
      return null;
    }
  }, []);

  function handleLogin() {
    localStorage.setItem('access_token', '123');
    Router.replace('/');
    return null;
  }

  return (
    <>
      <Hero>
        <Heading>LOGIN</Heading>
      </Hero>
      <button onClick={handleLogin}>Logar</button>
    </>
  );
}
