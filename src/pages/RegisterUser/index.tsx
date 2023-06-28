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
import { Form } from "react-bootstrap";
import FormPage from "../../components/FormPage";

const registerUserFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha requer ao menos 8 dígitos"),
  name: yup
    .string()
    .required("Nome de usuario é obrigatório ")
    .min(3, "Nome de usuario requer ao menos 8 dígitos"),
});

type loginFormData = {
  email: string;
  password: string;
  name: string;
};

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: yupResolver(registerUserFormSchema),
  });

  const handleRegisterSubmit: SubmitHandler<loginFormData> = async (values) => {
    const URL = `https://apigateway-production.up.railway.app/api/register`;

    const resquest = await fetch(URL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(values),
    });

    const response = await resquest.json();
    console.log(response);
    reset();
  };

  const googleLogo =
    "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=826&t=st=1686782772~exp=1686783372~hmac=d53933d83ec3806dc377a4171c6a7c28b5d7cbb0be365cfa280895d0272ad064";
  const facebookLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png";

  const appleLogo =
    "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png";

  return (
    <FormPage pageName="SingUp">
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
        <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Digite o seu email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              {...register("name")}
              type="text"
              placeholder="Digite o seu Nome"
            />
            {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
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
          <SinginButton variant="secondary" type="submit">
            Cadastrar
          </SinginButton>
        </Form>
      </div>
    </FormPage>
  );
}
