import "./styleIntroducao.css";
import iteracaoImg from "../../assets/iteração.jpg";
import { useNavigate } from "react-router-dom";

export default function IntroducaoFase5() {
  const navigate = useNavigate();

  return (
    <div className="introducao-container">
      <h1 className="titulo">Fase 5 - Iteração</h1>
      <img src={iteracaoImg} alt="Imagem de Iteração" className="imagem" />
      <p className="descricao">
        Iteração é um processo no qual você soma valores repetidamente em um
        loop. É muito usada em programação para repetir instruções, calcular
        médias, e percorrer coleções de dados.
      </p>
      <button
        className="botao"
        onClick={() => navigate("/fase5")}
      >
        Começar
      </button>
    </div>
  );
}
