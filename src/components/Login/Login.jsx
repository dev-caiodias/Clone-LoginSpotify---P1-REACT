import { useState, useEffect } from "react";
import styled from "styled-components";

const usuario_correto = "caio@email.com";
const senha_correta = "123456";

const Pagina = styled.div`
            min-height: 100vh;
            background-color: #121212;
            display: flex;
            align-items: center;
            justify-content: center; 
            `;

const Card = styled.div`
            background-color: #121212;
            padding: 2rem;
            border-radius: 8px;
            width: 100%;
            max-width: 380px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            `;

const Logo = styled.div`
        color: white;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        
        img {

        width: 110px;
        height: 60px;

        }`;

const  Titulo = styled.h1`
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0 0 1rem;`;

const Label = styled.label`
    width: 100%;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: -0.4rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 4px;
    border: 1px solid #535353;
    background-color: #121212;
    color: #ffffff;
    font-size: 1rem;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`;

const Botao = styled.button`
    width: 100%;
    padding: 0.85rem;
    background-color: #1db954;
    color: #000000;
    border: none;
    border-radius: 500px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: transform 0.1s;

    &:hover {
        transform: scale(1.03);
        background-color: #1ed760;
    }
`;

const Mensagem = styled.p`
    color: #ffffff;
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
`;

const Dica = styled.p`
    font-size: 0.8rem;
    color: #535353;
    text-align: center;
    margin-top: 1rem;
`;

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [tentouEntrar, setTentouEntrar] = useState(false);

    const [mensagem, setMensagem] = useState("");

    useEffect(() => {

        if (!tentouEntrar) return

        if (email === usuario_correto && senha === senha_correta) {
            setMensagem('Login bem-sucedido!');
        }else{
            setMensagem('Email ou senha incorretos. Tente novamente.');
        }
        
        setTentouEntrar(false);
    }, [tentouEntrar]);

    function handleEntrar() {
        setTentouEntrar(true);
    }

    return (
        <Pagina>
           <Card>
            
            <Logo>
                <img src="/Spotify-Logo.png" alt="Spotify" />
            </Logo>
            
            <Titulo>Olá de novo</Titulo>

            <Label>E-mail</Label>
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
            />

            <Label>Senha</Label>
            <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="sua senha"
            />

            {mensagem && <Mensagem>{mensagem}</Mensagem>}

            <Botao onClick={handleEntrar}>
                Entrar
            </Botao>

            <Dica>
                Teste: <strong>caio@email.com</strong> / <strong>123456</strong>
            </Dica>
            </Card>
        </Pagina>
    );       
}
export default Login