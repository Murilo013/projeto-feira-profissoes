import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styleCarrinho.css";

export default function Fase3() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [tempo, setTempo] = useState(0);
  const carrinhoRef = useRef<HTMLImageElement | null>(null);
  const corretoRef = useRef<HTMLHeadingElement | null>(null);
  const menosRef = useRef<HTMLHeadingElement | null>(null);
  const completouButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTempo((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const moverCarrinho = (value: string) => {
    setUserInput(value);
    const numericValue = parseInt(value, 10);

    if (isNaN(numericValue)) return;

    if (carrinhoRef.current) {
      carrinhoRef.current.style.marginLeft = `${numericValue}px`;
    }

    // Linha de chegada entre 900px e 1000px
    if (numericValue >= 900 && numericValue <= 1000) {
      if (corretoRef.current) corretoRef.current.style.display = "block";
      if (menosRef.current) menosRef.current.style.display = "none";
    } else {
      if (corretoRef.current) corretoRef.current.style.display = "none";
      if (menosRef.current) {
        menosRef.current.style.display = "block";
        if (numericValue < 900) {
          menosRef.current.textContent = "Um pouco mais...";
        } else {
          menosRef.current.textContent = "Um pouco menos...";
        }
      }
    }
  };

  const handleFinalizar = () => {
    navigate("/fase4/introducao");
  };

  return (
    <div className="fase3-container">
      <div className="conteudo">
        <p className="tempo">Tempo: {tempo}</p>
        <h1>Faça com que o carrinho cruze a linha de chegada</h1>

        <pre>
          <code>
            <span className="selector">.carrinho</span> {"{"}
            {"\n  "}
            <span className="property">margin-left</span>:{" "}
            <input
              autoComplete="off"
              type="text"
              minLength={1}
              maxLength={10}
              size={5}
              value={userInput}
              onChange={(e) => moverCarrinho(e.target.value)}
            />{" "}
            px;
            {"\n}"}
          </code>
        </pre>

        <h2 id="correto" ref={corretoRef}>
          Correto! 🎉{" "}
          <button
            id="completou"
            ref={completouButtonRef}
            onClick={handleFinalizar}
            className="btn-finalizar"
          >
            Finalizar
          </button>
        </h2>

        <h2 id="menos" ref={menosRef}></h2>
      </div>

      <div className="pista">
        <div className="linha-chegada" />
        <img
          className="carrinho"
          ref={carrinhoRef}
          id="carrinho"
          src="/img/carrinho.png"
          alt="Carrinho"
        />
      </div>
    </div>
  );
}
