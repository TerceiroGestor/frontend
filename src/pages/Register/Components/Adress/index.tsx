import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

interface Adress {
  street: string;
  city: string;
  neighborhood: string;
  state: string;
}

export default function Adress() {
 const [cep, setCep] = useState("");
  const [dataAdress, setDataAdress] = useState<Adress | null>(null);
  const requestAdress = async () => {
    console.log(cep)
    const URL = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    const resquest = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
    });

    const response = await resquest.json();
    console.log(response);
    setDataAdress(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      await requestAdress();
    };

    if (cep) {
      fetchData();
    }
  }, [cep]);

  const handleCepChange = (e: any) => {
    const newCep = e.target.value;
    setCep(newCep);
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Col xs={3}>
            <Form.Group controlId="formGridName">
              <Form.Label>C.E.P</Form.Label>
              <Form.Control size="lg" type="text" onChange={handleCepChange} />
            </Form.Group>
          </Col>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Rua</Form.Label>
            <Form.Control value={dataAdress?.street} size="lg" type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col xs={3}>
            <Form.Group controlId="formGridName">
              <Form.Label>Número</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bairro</Form.Label>
            <Form.Control size="lg" type="text" value={dataAdress?.neighborhood} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>Complemento</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>Ponto de referência</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>Cidade</Form.Label>
            <Form.Control value={dataAdress?.city} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>Estado</Form.Label>
            <Form.Control value={dataAdress?.state} />
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}
