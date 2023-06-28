import { Card } from "react-bootstrap";
import {
  BackgroudColor,
  Container,
  FloatingBox,
  FormSide,
  InfoSide,
  HeaderForm,
} from "./style";

type props = {
  children: JSX.Element;
  pageName: string;
};

export default function FormPage({ children, pageName }: props) {
  return (
    <>
      <BackgroudColor></BackgroudColor>
      <Container>
        <InfoSide>
          <div>
            <h1>{pageName} to</h1>
            <h2>Lorem Ipsum is simply</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </InfoSide>
        <FormSide>
          <FloatingBox>
            <HeaderForm>
              <p>Bem Vindo</p>
              <Card.Link as="a" href="#">
                Não tenho uma conta
                <br /> {pageName}
              </Card.Link>
            </HeaderForm>
            <h1>{pageName}</h1>
            {children}
          </FloatingBox>
        </FormSide>
      </Container>
    </>
  );
}
