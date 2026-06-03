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
        <div className = {styles.pagina}>
           <div className = {styles.card}>
            
            <div className = {styles.logo}>🎵</div>
            <h1 classNome = {styles.titulo}>Olá de novo</h1>

            <label className={styles.label}E-mail></label>
            <input 
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
            />

            <label className={styles.label}>Senha</label>
            <input
                type="password"
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="sua senha"
            />

            {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

            <button className={styles.botao} onClick={handleEntrar}>
                Entrar
            </button>

            <p className={styles.dica}>
                Teste: <strong>caio@email.com</strong> / <strong>123456</strong>
            </p>
            </div>
        </div>
    );       
}

export default Login