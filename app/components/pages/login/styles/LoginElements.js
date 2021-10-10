import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  padding: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const LoginHeader = styled.h1`
  color: #000;
  font-size: 1.3rem;
  font-weight: 900;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonLogin = styled.button`
  width: 93%;
  height: 35px;
  background-color: #1aebb6;
  border: 0;
  cursor: pointer;
`;
