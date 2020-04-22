import React from 'react';
import {Link} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/foodlogo.png';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="ItaFood" />
                <span>Bem Vindo, Sr.</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo lanche</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Lanches cadastrados</h1>

            <ul>
                <li>
                    <strong>LANCHE:</strong>
                    <p>Hamburguer</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>LANCHE:</strong>
                    <p>Hamburguer</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>LANCHE:</strong>
                    <p>Hamburguer</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>LANCHE:</strong>
                    <p>Hamburguer</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>LANCHE:</strong>
                    <p>Hamburguer</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>


        </div>
    );
}