import { useEffect, useRef, useState } from "react";

export default function Fase5() {
  const [tempo, setTempo] = useState(0);
  const [tempoJogo, setTempoJogo] = useState(0);
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [score, setScore] = useState(0);
  const [valorIteracao, setValorIteracao] = useState(10);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [botaoFinalizarVisivel, setBotaoFinalizarVisivel] = useState(false);

  const gameBoardRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const [playerPos, setPlayerPos] = useState({ top: 100, left: 100 });
  const [targetPos, setTargetPos] = useState({ top: 150, left: 150 });

  useEffect(() => {
    if (jogoIniciado && tempoJogo < 60) {
      const intervalo = setInterval(() => {
        setTempoJogo((prev) => {
          if (prev >= 59) {
            clearInterval(intervalo);
            setMostrarMensagem(true);
            setBotaoFinalizarVisivel(true);
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [jogoIniciado]);

  useEffect(() => {
    const mover = (e: KeyboardEvent) => {
      if (!jogoIniciado || tempoJogo >= 60) return;
      if (!gameBoardRef.current || !playerRef.current) return;
  
      const step = valorIteracao;
      const board = gameBoardRef.current.getBoundingClientRect();
      const player = playerRef.current.getBoundingClientRect();
  
      const playerSize = player.width; // player é quadrado (5x5)
      const boardSize = board.width;
  
      let { top, left } = playerPos;
  
      switch (e.key) {
        case "ArrowUp":
          top = Math.max(0, top - step);
          break;
        case "ArrowDown":
          top = Math.min(boardSize - playerSize, top + step);
          break;
        case "ArrowLeft":
          left = Math.max(0, left - step);
          break;
        case "ArrowRight":
          left = Math.min(boardSize - playerSize, left + step);
          break;
      }
  
      setPlayerPos({ top, left });
    };
  
    document.addEventListener("keydown", mover);
    return () => document.removeEventListener("keydown", mover);
  }, [jogoIniciado, valorIteracao, tempoJogo, playerPos]);
  

  useEffect(() => {
    if (!jogoIniciado) return;
    const player = playerRef.current?.getBoundingClientRect();
    const target = targetRef.current?.getBoundingClientRect();

    if (!player || !target) return;

    const colisao =
      player.top < target.bottom &&
      player.bottom > target.top &&
      player.left < target.right &&
      player.right > target.left;

    if (colisao) {
      setScore((prev) => prev + 1);
      moverTarget();
    }
  }, [playerPos]);

  function moverTarget() {
    if (!gameBoardRef.current) return;
    const board = gameBoardRef.current.getBoundingClientRect();
    const top = Math.floor(Math.random() * (board.height - 20));
    const left = Math.floor(Math.random() * (board.width - 20));
    setTargetPos({ top, left });
  }

  const iniciarJogo = () => {
    setJogoIniciado(true);
    setTempoJogo(0);
    setScore(0);
    setMostrarMensagem(false);
    setBotaoFinalizarVisivel(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Fase 5 - Iteração</h1>
      <h2 id="tempojogo" className="mb-2">
        Tempo: {tempoJogo}s
      </h2>
      <h2>Pontos: {score}</h2>

      <div
        ref={gameBoardRef}
        className="relative w-[300px] h-[300px] bg-gray-200 border border-gray-400 my-4"
      >
        <div
          ref={playerRef}
          className="absolute w-6 h-6 bg-black"
          style={{ top: playerPos.top, left: playerPos.left }}
        ></div>
        <div
          ref={targetRef}
          className="absolute w-5 h-5 bg-green-500"
          style={{ top: targetPos.top, left: targetPos.left }}
        ></div>
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2 text-lg">Valor da Iteração:</label>
        <input
          type="number"
          value={valorIteracao}
          onChange={(e) => {
            let val = parseInt(e.target.value);
            if (val > 50) val = 50;
            if (val < 0) val = 0;
            setValorIteracao(val);
          }}
          className="w-20 text-center border-2 border-cyan-400 rounded-md bg-transparent text-white"
        />
      </div>

      {mostrarMensagem && (
        <div className="text-2xl font-bold text-red-400 mb-3">Tempo Encerrado!</div>
      )}

      <div className="flex gap-4">
        <button
          id="start"
          onClick={iniciarJogo}
          disabled={jogoIniciado}
          className={`px-4 py-2 border-2 border-cyan-400 rounded-md transition ${
            jogoIniciado
              ? "opacity-50 cursor-default"
              : "hover:shadow-cyan-400/40 hover:shadow-lg"
          }`}
        >
          Start
        </button>

        {botaoFinalizarVisivel && (
          <button
            onClick={() => alert(`Pontuação final: ${score}`)}
            className="px-4 py-2 border-2 border-cyan-400 rounded-md hover:shadow-cyan-400/40 hover:shadow-lg transition"
          >
            Finalizar
          </button>
        )}

        <button
          onClick={() => setMostrarPopup(true)}
          className="px-4 py-2 border-2 border-cyan-400 rounded-md hover:shadow-cyan-400/40 hover:shadow-lg transition"
        >
          Mostrar Dica
        </button>
      </div>

      {/* Popup */}
      {mostrarPopup && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setMostrarPopup(false)}
        >
          <div
            className="bg-zinc-800 border-2 border-cyan-400 rounded-xl p-6 text-center w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-xl"
              onClick={() => setMostrarPopup(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4">Dica</h2>
            <p>Você tem 60 segundos ao clicar em Start.</p>
            <p>Use as setas do teclado para se movimentar.</p>
          </div>
        </div>
      )}
    </div>
  );
}
