import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin-top: -50px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: initial;
  justify-content: space-between;
  flex-direction: column;

  max-width: 1165px;
  max-height: 256px;
  width: 100%;
  height: 100%;
  padding: 24px;

  border: 1px solid #eee;
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
  opacity: 1;

  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    max-height: 350px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  strong {
    font-size: 24px;
    color: #0c5990;
  }

  p {
    color: #c1c1c1;
    font-size: 16px;
  }
`;

export const Fields = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 20px 0;
  }

  .DatePicker {
    input {
      padding: 0px;
      font-size: 16px;
      margin: 0 10px;
      color: #838383;
      padding-bottom: 3px;
      text-align: left;

      &::placeholder {
        color: #757575;
        text-align: left;
        margin-bottom: 5px;
      }
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      input {
        margin: 15px 0;
        width: 100%;
        line-height: 2px;
      }
    }
  }

  input {
    border: none;
    border-bottom: 1px solid #0c5990;
    color: #838383;
    padding-bottom: 3px;
    &.large-field {
      width: 40%;
    }
    &.medium-field {
      width: 20%;
    }
    &.short-field {
      width: 10%;
    }

    & + input {
      margin: 0 10px;
    }

    @media only screen and (max-width: 600px) {
      margin: 15px 0;

      &.large-field,
      &.medium-field,
      &.short-field {
        width: 100%;
      }

      & + input {
        margin: 15px 0;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    border-radius: 32px;
    width: 168px;
    height: 48px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & + button {
      margin-left: 16px;
    }

    &.add-btn {
      background: #0c5990;
      color: #fff;
      border: 1px solid #fff;
      &:hover {
        background: ${shade(0.1, '#0c5990')};
      }
    }

    &.cancel-btn {
      background: #fff;
      color: #0c5990;
      border: 1px solid #0c5990;
      &:hover {
        background: ${shade(0.1, '#fff')};
      }
    }
  }
`;

export const Board = styled.div`
  display: flex;
  align-items: initial;
  justify-content: space-between;
  flex-direction: column;

  max-width: 1165px;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
  opacity: 1;

  @media only screen and (max-width: 600px) {
    max-height: 1000px;
    overflow-x: auto; /* Trigger vertical scroll    */
    overflow-y: auto; /* Hide the horizontal scroll */
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

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0px 15px;
  font-weight: 300;
  width: 100%;

  thead {
    border: 1px solid #333;
    background: #0c5990;
    border: none;
    text-align: left;

    th {
      &.first {
        border-radius: 5px 0 0 5px;
      }
      &.last {
        border-radius: 0 5px 5px 0;
      }

      padding: 10px 15px;
      font-weight: 400;
      color: #fff;
      font-size: 16px;
    }
  }

  tbody {
    border: 1px solid #333;
    border: none;
    text-align: left;

    td {
      border: 10px solid white;
      border-right: 0;
      border-left: 0;

      padding: 0px 10px;
      color: #707070;

      &.service-text {
        color: #0c5990;
      }

      &.plate-text {
        color: #0c5990;
        font-weight: 700;
      }

      div.actions {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

        button {
          padding: 8px;
          border-radius: 32px;
          width: 90px;
          font-weight: 500;
          font-size: 12px;
          margin: 0 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          &.delete-btn {
            border: 1px solid #f91919;
            color: #f91919;
          }

          &.finish-btn {
            border: 1px solid #02e64a;
            color: #02e64a;
          }

          img {
            height: 16px;
            margin-right: 5px;
          }
        }
      }
    }

    tr {
      box-shadow: 2px 2px 10px #00000029;
      border-radius: 4px;
      opacity: 1;
      height: 72px;
    }

    th {
      padding: 5px 10px;
      font-weight: 400;
      color: #fff;
      font-size: 16px;
    }
  }
`;
