import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: -50px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    max-width: 496px;
    width: 100%;
    margin-bottom: 106px;
  }

  h1 {
    font-size: 32px;
    font-weight: 300;
    color: #0c5990;
    margin-bottom: 16px;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
      font-weight: 500;
    }
  }

  p {
    color: #707070;
    margin-bottom: 54px;
    text-align: center;
    line-height: 24px;
    max-width: 600px;
  }

  a {
    background: #0c5990;
    border-radius: 32px;
    color: #fff;
    width: 120px;
    height: 48px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#0c5990')};
    }
  }
`;
