import styled from "styled-components";

interface ButtonsProps {
  isActive?: boolean;
}
export const Buttons = styled.div<ButtonsProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isActive ? 'space-between' : 'end'};
  margin-top: 50px;
`

export const ClearButton = styled.button`
  background-color: var(--secundary-color);
  border: 1px solid grey;
  color: grey;
  padding: 20px 100px;
  border-radius: 10px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const ContinueButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  margin-left: 20px;
  padding: 20px 100px;
  border-radius: 10px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
