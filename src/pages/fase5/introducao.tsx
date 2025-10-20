import iteracaoImg from "../../assets/iteração.jpg";
import { useNavigate } from "react-router-dom";

export default function IntroducaoFase5() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cor-fundo flex items-center justify-center p-6 font-poppins">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-2 border-azul-detalhes rounded-3xl shadow-fase4-glow p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-cor-fonte mb-6">💻 Fase 5 - Iteração</h1>
        <img src={iteracaoImg} alt="Imagem de Iteração" className="w-full max-w-md mx-auto mb-6 rounded-2xl shadow-2xl border-2 border-azul-detalhes" />
        <p className="text-cor-fonte text-lg leading-relaxed mb-6">
          Iteração é um processo no qual você soma valores repetidamente em um
          loop. É muito usada em programação para repetir instruções, calcular
          médias, e percorrer coleções de dados.
        </p>
        <button
          className="px-8 py-3 bg-gradient-to-r from-azul-detalhes to-blue-400 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-blue-400 hover:to-azul-detalhes hover:scale-105 shadow-lg hover:shadow-fase4-glow-sm"
          onClick={() => navigate("/fase5")}
        >
          🚀 Começar
        </button>
      </div>
    </div>
  );
}