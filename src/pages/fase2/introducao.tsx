export default function introducaof2(){
    const handleStartFase = () => {
        window.location.href = '/fase2';
    };

    return(
        <div id="main" className="min-h-screen bg-cor-fundo flex items-center justify-center p-6 font-poppins">
            <div id="container" className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-2 border-azul-detalhes rounded-3xl shadow-fase4-glow p-8 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-cor-fonte mb-6">🎬 Fase 2 - Filmes e CSS</h1>

                <img 
                    src="https://i.pinimg.com/474x/6b/86/40/6b8640e0883fcdf4ad8162c530b30b39.jpg" 
                    alt="Filme"
                    className="w-full max-w-md mx-auto mb-6 rounded-2xl shadow-2xl border-2 border-azul-detalhes"
                />

                <p className="text-cor-fonte text-lg leading-relaxed mb-6">
                    Nesta fase você manipulará as dimensões do poster de um filme de sua escolha alterando um trecho do código de estilos da página.
                </p>

                <button 
                    onClick={handleStartFase}
                    className="px-8 py-3 bg-gradient-to-r from-azul-detalhes to-blue-400 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-blue-400 hover:to-azul-detalhes hover:scale-105 shadow-lg hover:shadow-fase4-glow-sm"
                >
                    🚀 Iniciar Fase 2
                </button>
            </div>
        </div>
    )
}