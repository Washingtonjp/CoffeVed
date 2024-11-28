import './Login.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import InputGroup from '../../components/inputGroup/InputGroup';
import ClientContext from '../../context/Client.provider';
import React, { useState, useContext } from 'react';

function Login() {
    const { LogarCliente } = useContext(ClientContext);

    const [login, setLogin] = useState({
        email: '',
        senha: ''
    });

    const [errorMessage, setErrorMessage] = useState(''); 

    const history = useHistory();

    return (
        <>
            <Header />

            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-6 forms mx-auto border">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="text-center col-12">
                                <Title label="Login" />
                            </div>
                            <InputGroup 
                                required 
                                label="Email: " 
                                change={(e) => { 
                                    setLogin({ ...login, email: e.target.value }); 
                                    setErrorMessage(''); // Limpa o erro ao editar
                                }} 
                                info="seu email" 
                                id="email" 
                                type="email" 
                                col="col-12 col-sm-8" 
                            />
                            <InputGroup 
                                required 
                                label="Senha: " 
                                change={(e) => { 
                                    setLogin({ ...login, senha: e.target.value }); 
                                    setErrorMessage(''); // Limpa o erro ao editar
                                }} 
                                info="sua senha" 
                                id="senha" 
                                type="password" 
                                col="col-12 col-sm-8" 
                            />
                            {errorMessage && ( // Exibe mensagem de erro
                                <div className="col-12 text-center text-danger mb-2">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="col-12 text-center mt-2">
                                <p>Esqueceu sua senha? <Link to="/passwordRecovery">Clique aqui.</Link></p>
                                <div className="d-grid gap-2 col-6 mx-auto mb-2">
                                    <Button 
                                        success 
                                        label="Acessar" 
                                        click={async () => {
                                            try {
                                                const success = await LogarCliente(login);
                                                if (success) {
                                                    history.push('/');
                                                } else {
                                                    setErrorMessage('Email ou senha inválido.'); 
                                                }
                                            } catch (error) {
                                                if (error.response && error.response.status === 400) {
                                                    setErrorMessage('Email ou senha inválido.');
                                                } else {
                                                    setErrorMessage('Ocorreu um erro inesperado. Tente novamente mais tarde.');
                                                }
                                            }
                                        }}
                                    >
                                        Logar
                                    </Button>
                                </div>
                                <div className="form-group col-12 d-grid gap-2 mx-auto">
                                    <p>Ainda não tem conta? <Button success link="/register" label="Cadastre-se"></Button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;