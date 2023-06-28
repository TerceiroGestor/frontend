import { Col, Container, Form, Row } from "react-bootstrap";

export default function PersonalData() {
  return(
   <Container>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>
            Nome Completo
          </Form.Label>
          <Form.Control size='lg' type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Nome Social
          </Form.Label>
          <Form.Control size='lg' type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Data de nascimento
            </Form.Label>
            <Form.Control
            size='lg'
            type="date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPersonalDocuments">
            <Form.Label>
              Estado
            </Form.Label>
            <Form.Select size='lg'>
              <option>Solteiro</option>
              <option>Casado</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
          <Form.Label>
            Escolaridade
          </Form.Label>
          <Form.Select size='lg'>
              <option>Superior Completo</option>
              <option>Superior Incompleto</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
          <Form.Label>
            Nacionalidade
          </Form.Label>
          <Form.Select size='lg'>
              <option>Brasileiro</option>
              <option>Superior Incompleto</option>
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>
              Grupo Sanguíneo
            </Form.Label>
            <Form.Select size='lg'>
              <option>A</option>
              <option>B</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>
              Tipo de Usuário
            </Form.Label>
            <Form.Select size='lg'>
              <option>Administrador</option>
              <option>Voluntario</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  )
};