import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/foodlogo.png';

export default function Register() {
    return (
        <div className="register-container" >
            <div className="content" >
                <section>
                    <img src={logoImg} alt="ItaFood"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e facilite a vida do seu cliente</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input  placeholder="Nome da Lanchonete"/>
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>

                



            </div>
        </div>
            
    );
}