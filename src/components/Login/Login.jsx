import { useState, useEffect } from "react";
import styles from "./Login.module.css";

const usuario_correto = "caio@email.com";
const senha_correta = "123456";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [tentouEntrar, setTentouEntrar] = useState(false);

    const [mensagem, setMensagem] = useState("");

    UseEffect(() => {

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
        
}