import React from "react";
import './style.css';

const Produtos = () => {
    return (
        <section id="produtos">
            <div className="secao-produtos center">
                <h2 className="personagens">PARTICIPANTES</h2>
                    <p>
                        Os mais novos Super Colegiais para o mais novo jogo mortal!
                    </p>

                    <div className="oculos-imgs">
                            <div className="card-oculos">
                                <h3>Óculos de grau</h3>
                                <picture>
                                    <img src="./assets/oculos01.png" alt="Óculos de grau"></img>
                                </picture>
                                <p>R$ 500,00</p>

                                <div className="card-oculos">
                                <h3>Óculos de grau</h3>
                                <picture>
                                    <img src="./assets/oculos02.png" alt="Óculos de grau"></img>
                                </picture>
                                <p>R$ 500,00</p>
                            </div>

                            <div className="card-oculos">
                                <h3>Óculos de grau</h3>
                                <picture>
                                    <img src="./assets/oculos03.png" alt="Óculos de grau"></img>
                                </picture>
                                <p>R$ 500,00</p>
                            </div>

                            <div className="card-oculos">
                                <h3>Óculos de grau</h3>
                                <picture>
                                    <img src="./assets/oculos04.png" alt="Óculos de grau"></img>
                                </picture>
                                <p>R$ 500,00</p>
                            </div>

                        </div>
                    </div>

                    <div className="lista-oculos center">
                        <p>Todos os nossos produtos incluem:</p>
                        <ul>
                            <li>Garantia de 1 ano</li>
                            <li>Manutenção preventiva</li>
                            <li>Descontos especias na compra da segunda unidade</li>
                            <li>Flexibilidade de pagamento</li>
                        </ul>
                    </div>
            </div>
        </section>
    )
}

export default Produtos;