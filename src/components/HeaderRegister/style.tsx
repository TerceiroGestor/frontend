import { Container } from "react-bootstrap";
import { styled } from "styled-components";
interface CircleProps {
  isActive?: boolean;
}

export const Circle = styled.div<CircleProps>`
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--secundary-color)'};
`;

export const Line = styled.div`
  width: 300px;
  height: 3px;
  border-radius: 40px;
  margin-bottom: 80px;
  background-color: var(--primary-color);
`
export const Div = styled(Container)`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  margin-top: -400px;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  p{
    margin-top: 20px;
  }

`