import { useEffect } from 'react';
import { initFase4 } from './scriptPizza';
import pizzaImage from '../../assets/pizza.png';
import { useNavigate } from 'react-router-dom';

export default function Fase4() {
    const navigate = useNavigate();

    useEffect(() => {
        const cleanup = initFase4(navigate);
        return () => cleanup && cleanup();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-cor-fundo flex flex-col items-center justify-center p-6 font-poppins">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-cor-fonte mb-2">🍕 Carrinho de Compras</h1>
                <p className="text-azul-detalhes text-lg">Conserte o código para calcular o total das pizzas</p>
            </div>

            <div 
                id="carrinho-compras" 
                className="border-2 border-azul-detalhes w-full max-w-md text-center rounded-3xl mb-6 shadow-fase4-glow bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
            >
                {/* Pizzas Section */}
                <div className="p-6">
                    <h2 className="text-cor-fonte mb-6 text-2xl font-semibold">Suas Pizzas</h2>
                    
                    <div className="space-y-4 mb-6">
                        <div id="pizzaAlinhamento" className="text-cor-fonte flex items-center justify-between bg-gray-800/30 rounded-2xl p-4 hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <img className="h-16 w-16 object-cover rounded-xl" src={pizzaImage} alt="pizza" /> 
                                <span className="text-lg font-medium">Pizza Margherita</span>
                            </div>
                            <p className="text-2xl font-bold text-azul-detalhes">R$40</p>
                        </div>

                        <div id="pizzaAlinhamento" className="text-cor-fonte flex items-center justify-between bg-gray-800/30 rounded-2xl p-4 hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <img className="h-16 w-16 object-cover rounded-xl" src={pizzaImage} alt="pizza" /> 
                                <span className="text-lg font-medium">Pizza Pepperoni</span>
                            </div>
                            <p className="text-2xl font-bold text-azul-detalhes">R$35</p>
                        </div>

                        <div id="pizzaAlinhamento" className="text-cor-fonte flex items-center justify-between bg-gray-800/30 rounded-2xl p-4 hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <img className="h-16 w-16 object-cover rounded-xl" src={pizzaImage} alt="pizza" /> 
                                <span className="text-lg font-medium">Pizza Quatro Queijos</span>
                            </div>
                            <p className="text-2xl font-bold text-azul-detalhes">R$45</p>
                        </div>
                    </div>
                </div>

                {/* Popup */}
                <div 
                    id="popup" 
                    className="hidden fixed inset-0 z-[1000] bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm"
                >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 mx-auto p-6 border border-azul-detalhes w-4/5 max-w-lg rounded-2xl text-cor-fonte text-center relative shadow-2xl">
                        <span 
                            className="text-gray-400 text-3xl font-bold hover:text-white cursor-pointer absolute -top-3 -right-3 bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-all duration-200"
                            id="fecharPopup"
                        >
                            &times;
                        </span>
                        <h2 className="text-2xl font-bold mb-4 text-azul-detalhes">💡 Dica</h2>
                        <div className="space-y-2 text-left">
                            <p className="text-lg">• Observe os preços das pizzas acima</p> 
                            <p className="text-lg">• Insira os valores corretos nas variáveis</p>
                            <p className="text-lg">• Use as variáveis para calcular o total</p>
                            <p className="text-lg">• A fórmula deve somar as 3 pizzas</p>
                        </div>
                    </div>
                </div>
                
                <button 
                    id="botaoPopup"
                    className="mx-4 mb-4 px-6 py-3 bg-gradient-to-r from-azul-detalhes to-blue-400 text-white rounded-2xl font-semibold transition-all duration-300 hover:from-blue-400 hover:to-azul-detalhes hover:scale-105 shadow-lg"
                >
                    💡 Mostrar Dica
                </button>
                
                {/* Inputs Section */}
                <div className="px-6 pb-6">
                    <h3 className="text-cor-fonte mb-4 text-xl font-semibold">Conserte o código:</h3>
                    
                    <div className="bg-gray-900/50 rounded-2xl p-4 mb-4">
                        <div className="space-y-3 text-left font-mono">
                            <div className="flex items-center gap-2">
                                <span className="text-azul-detalhes">var</span>
                                <span className="text-cor-fonte">pizza1 =</span>
                                <input 
                                    autoComplete="off" 
                                    id="pizza1" 
                                    type="text" 
                                    className="outline-none bg-gray-800 rounded-lg text-cor-fonte text-lg px-3 py-1 border border-azul-detalhes w-16 text-center"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-azul-detalhes">var</span>
                                <span className="text-cor-fonte">pizza2 =</span>
                                <input 
                                    autoComplete="off" 
                                    id="pizza2" 
                                    type="text" 
                                    className="outline-none bg-gray-800 rounded-lg text-cor-fonte text-lg px-3 py-1 border border-azul-detalhes w-16 text-center"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-azul-detalhes">var</span>
                                <span className="text-cor-fonte">pizza3 =</span>
                                <input 
                                    autoComplete="off" 
                                    id="pizza3" 
                                    type="text" 
                                    className="outline-none bg-gray-800 rounded-lg text-cor-fonte text-lg px-3 py-1 border border-azul-detalhes w-16 text-center"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-azul-detalhes">var</span>
                                <span className="text-cor-fonte">total =</span>
                                <input 
                                    autoComplete="off" 
                                    id="formula" 
                                    type="text" 
                                    className="outline-none bg-gray-800 rounded-lg text-cor-fonte text-base px-3 py-1 border border-azul-detalhes w-48"
                                />
                            </div>
                        </div>
                    </div>

                    <button 
                        id="botao1"
                        className="w-full py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-green-400 hover:to-green-500 hover:scale-105 shadow-lg mb-4"
                    >
                        Consertar Código
                    </button>

                    <div className="space-y-3">
                        <h2 id="mostrar" className="text-cor-fonte text-xl font-semibold">Total: </h2>
                        <h2 id="erro" className="text-red-400 text-lg font-medium"></h2>
                        <h2 id="aviso1" className="text-yellow-400 text-lg font-medium">⚠️ Faça o cálculo das 3 variáveis</h2>
                        
                        <div 
                            id="correto" 
                            className="hidden text-green-400 text-2xl font-bold flex flex-col items-center gap-3 p-4 bg-green-900/20 rounded-2xl border border-green-400/30"
                        >
                            ✅ Correto!
                        </div>
                        
                        <div className="text-center">
                            <p id="tempo" className="text-cor-fonte text-lg font-medium">⏱️ Tempo: 0</p>
                        </div>
                    </div>

                    {/* Botão Finalizar separado */}
                    <div className="px-6 pb-6">
                        <button 
                            id="completou"
                            className="hidden w-full py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:scale-105 shadow-lg"
                        >
                            Próxima Fase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}