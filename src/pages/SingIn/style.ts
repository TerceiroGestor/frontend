import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import styled from "styled-components";

export const SinginButton = styled(Button)`
  width: 100%;
  height: 44px;
  background-color: var(--primary-color);
  border: none;
  box-shadow: 5px 5px 20px -15px black;
  margin-top: 10%;
`;

export const FormInput = styled(Form)`
  input {
    height: 44px;
  }
`;
export const ErrorMessage = styled.p`
  color: var(--red);
  margin-top: 5px;
  font-size: 16px;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8% 0;
  transition: 0.4s;
  :hover {
    filter: brightness(60%);
  }
  button {
    height: 55px;
    border-radius: 9px;
    border: none;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 25px;
  }
`;

export const PrimarySocialButton = styled.button`
  width: 65%;
  display: flex;
  background-color: #e8e8e8;
  p {
    margin: 0 0 0 5%;
  }
`;

export const SecundarySocialButton = styled.button`
  width: 55px;
  background-color: #f6f6f6;
`;
