export default function IntroducaoFase4() {
    const handleStartFase = () => {
        window.location.href = '/fase4';
    };

    return (
        <div className="min-h-screen bg-cor-fundo flex items-center justify-center p-6 font-poppins">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-2 border-azul-detalhes rounded-3xl shadow-fase4-glow p-8 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-cor-fonte mb-6">
                    🍕 Fase 4 - Manipulação de Variáveis
                </h1>

                <p className="text-cor-fonte text-lg leading-relaxed mb-6">
                    Nessa fase há um trecho de código JavaScript que precisa ser corrigido, você deve preencher os preços corretos das pizzas nas caixas de entrada ao lado de cada variável e em baixo deverá colocar as somas das variáveis.
                </p>
                
                <div className="mb-6 p-4 bg-blue-900/20 border border-blue-400/30 rounded-2xl">
                    <p className="text-blue-300 font-medium">
                        💡 Dica: Use as setas do teclado para se movimentar no jogo e colete os quadrados verdes!
                    </p>
                </div>

                <button 
                    onClick={handleStartFase}
                    className="px-8 py-3 bg-gradient-to-r from-azul-detalhes to-blue-400 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-blue-400 hover:to-azul-detalhes hover:scale-105 shadow-lg hover:shadow-fase4-glow-sm"
                >
                    Iniciar Fase 4
                </button>
            </div>
        </div>
    );
}