import { styled } from "styled-components";

export const Circle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: white;
`

export const Nav = styled.div`
  background-color: var(--primary-color);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100px;
    width: 200px;
    height: 50px;
    margin: 30px auto 350px;
  }
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
`

export const Link = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25.2941px;
  line-height: 31px;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  opacity: 0.6;
    &:hover {
    color: black;
    opacity: 1;
  }
`