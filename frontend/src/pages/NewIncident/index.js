import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/foodlogo.png';

export default function NewLanche() {
    return (
        <div className="new-incident-container" >
            <div className="content" >
                <section>
                    <img src={logoImg} alt="ItaFood"/>
                    <h1>Cadastrar novo Lanche</h1>
                    <p>Descreva o seu lanche detalhadamente para ajudar o cliente na escolha.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form>
                    <input  placeholder="Nome do Lanche"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>

                



            </div>
        </div>
            
    );
}