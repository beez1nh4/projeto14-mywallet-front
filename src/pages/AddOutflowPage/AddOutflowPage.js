import styled from "styled-components";
import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { Title } from "../../components/Title";
import { backgroundColor } from "../../constants/colors";

export default function AddOutflowPage() {
    return(
        <>
        <Title>Nova saída</Title>
        <Background>
            <Input
            placeholder="Valor"
            />
            <Input
            placeholder="Descrição"
            />
            <SubmitButton>Salvar saída</SubmitButton>
            <Fill></Fill>
        </Background>
        </>
    )
}

const Fill = styled.div`
    background-color: ${backgroundColor};
    height: 650px;
`