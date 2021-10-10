import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import {
  ButtonLogin,
  ButtonWrapper,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
} from '../app/components/pages/login/styles/LoginElements';
import {
  DinamicallyWidthInput,
  InputTitle,
  InputWrapper,
} from '../styles/InputElements';
import withAuth from './Auth/withAuth';

const Hero = styled.div`
  height: 100vh;
  background: #fff;
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
        <LoginContainer>
          <LoginWrapper>
            <LoginHeader>LOG IN</LoginHeader>
            <InputWrapper>
              <InputTitle>Email</InputTitle>
              <DinamicallyWidthInput
                style={{ width: '20rem' }}
              ></DinamicallyWidthInput>
            </InputWrapper>

            <InputWrapper>
              <InputTitle>Password</InputTitle>
              <DinamicallyWidthInput
                style={{ width: '20rem' }}
              ></DinamicallyWidthInput>
            </InputWrapper>
            <ButtonWrapper>
              <ButtonLogin>Login</ButtonLogin>
            </ButtonWrapper>
          </LoginWrapper>
        </LoginContainer>
      </Hero>
      <button onClick={handleLogin}>Logar</button>
    </>
  );
}
