import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initFase2 } from './scriptFilmes';

export default function Fase2() {
    const navigate = useNavigate();

    useEffect(() => {
        // Passa a função navigate para a lógica da fase
        const cleanup = initFase2(() => navigate('/fase3/introducao'));
        return () => cleanup && cleanup();
    }, [navigate]);

    return (
        <div className="fase2">
            <h1 id="pagetitle" className="title">Pesquise por um filme que goste!</h1>

            <div className="search">
                <input autoComplete="off" type="text" id="query" placeholder="Digite um filme..." />
                <button id="searchBtn" className="btn">Pesquisar</button>
            </div>

            <div className="movies">
                <img src="" alt="Poster pesquisado" className="posters" id="poster" />
                <img src="" alt="Poster referência" className="posters ref" id="poster2" />
            </div>

            <div className="box">
                <h1 id="desafio">Desafio</h1>
                <h1 id="instruc">
                    Iguale o tamanho das imagens alterando a propriedade "height" do poster.
                </h1>

                <div className="userInput">
                    <pre>
                        {`#poster {`}
                            height: <input autoComplete="off" type="text" id="inputSize"/> px;
                        {`}`}
                    </pre>
                </div>

                <h2 id="acerto">Correto!</h2>

                <button id="completou">Finalizar</button>
                <p id="tempo"> Tempo: 0</p>
            </div>
        </div>
    );
}
