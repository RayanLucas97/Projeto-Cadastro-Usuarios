import { useEffect, useState } from "react"
import api from "../../services/api"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackGround"
import Trash from "../../assets/trash.svg"


import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser } from "./styles"


function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get("/usuarios");

            setUsers(data)
        }
        getUsers()
    }, [])


    return (

        <Container>
            <TopBackground />
            <Title>Lista de Usuários </Title>

            <ContainerUsers >
                
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser  src={`https://avatar.iran.liara.run/public?username=${user.div}`}/>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src= {Trash} alt="icone-lixo" />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button">Voltar</Button>
        </Container>


    )
}


export default ListUsers