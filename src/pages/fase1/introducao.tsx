import './styleIntroducao.css';
import { useNavigate } from 'react-router-dom';

export default function IntroducaoF1() {
    const navigate = useNavigate();

    const handleStartFase = () => {
        navigate('/fase1');
    };

    return (
        <div id="main-container">
            <div id="content-container">
                <h1 className="title">Fase 1 - Editor HTML</h1>

                <img 
                    src="/img/InterEditor.jpg" 
                    alt="Editor"
                    className="image"
                />

                <p className="description">
                    Essa é a fase de introdução ao HTML! Aqui, você vai aprender os conceitos básicos enquanto cria uma página simples. Insira inputs, veja a página mudar dinamicamente e confira o código que está criando.
                </p>

                <button 
                    onClick={handleStartFase}
                    className="start-button"
                >
                     Iniciar Fase 1
                </button>
            </div>
        </div>
    );
}