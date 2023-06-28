import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SinginButton,
  ErrorMessage,
  PrimarySocialButton,
  SecundarySocialButton,
  SocialLogin,
} from "./style";
import { Card, Form } from "react-bootstrap";
import FormPage from "../../components/FormPage";

const loginUserFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha requer ao menos 8 dígitos"),
});

type loginFormData = {
  email: string;
  password: string;
};

export default function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginFormData>({
    resolver: yupResolver(loginUserFormSchema),
  });

  const handleLoginSubmit: SubmitHandler<loginFormData> = async (values) => {
    console.log(values);
    reset();
  };

  const googleLogo =
    "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=826&t=st=1686782772~exp=1686783372~hmac=d53933d83ec3806dc377a4171c6a7c28b5d7cbb0be365cfa280895d0272ad064";
  const facebookLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png";

  const appleLogo =
    "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png";

  return (
    <FormPage pageName="SingIn">
      <div>
        <SocialLogin>
          <PrimarySocialButton>
            <img src={googleLogo} alt="Google logo" />
            <p>Sing in with Google</p>
          </PrimarySocialButton>
          <SecundarySocialButton>
            <img src={facebookLogo} alt="Facebook logo" />
          </SecundarySocialButton>
          <SecundarySocialButton>
            <img src={appleLogo} alt="Apple logo" />
          </SecundarySocialButton>
        </SocialLogin>
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Insira o nome de usuário ou o email</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Nome de usuário ou Email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Insira sua Senha</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
            {errors.password && (
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre-se de mim" />
          </Form.Group>
          <Card.Link as="a" href="#">
            Esquici minha senha
          </Card.Link>
          <SinginButton variant="secondary" type="submit">
            Entrar
          </SinginButton>
        </Form>
      </div>
    </FormPage>
  );
}
