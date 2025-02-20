import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"


import {
  Title,
  Container,
  Form,
  Containerimputs,
  Input,
  InputLabel
} from "./styles"


import Button from "../../components/Button"
import TopBackground from "../../components/TopBackGround"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

    navigate("/lista-de-usuarios")



  }

  

  return (
    <Container>

      <TopBackground />
      <Form>

        <Title>Cadastro Usuário</Title>

        <Containerimputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder=" Nome do usuário" ref={inputName} />
          </div>


          <div>
            <InputLabel>
              idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder=" Idade do  usuário" ref={inputAge} />
          </div>


        </Containerimputs>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder=" E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}> Ver Lista de Usuários </Button>


    </Container>
  )
}

export default Home




