import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Fase1() {
  const navigate = useNavigate();
  const [h1, setH1] = useState("Título da Sua Primeira Página");
  const [desc, setDesc] = useState("Descrição da página");
  const [h2, setH2] = useState("Título da Imagem");
  const [img, setImg] = useState(
    "https://st.depositphotos.com/2398521/2608/i/450/depositphotos_26089317-stock-photo-cute-small-dog.jpg"
  );
  const [descImg, setDescImg] = useState("Descrição da Imagem");

  const handleStartFase = () => {
        navigate('/fase2/introducao');
    };

  return (
    <div className="fundo">
      <h1 id="titulo">Edite a página HTML abaixo!</h1>

      <div id="pagina">
        <h1 className="h1 text-black">{h1}</h1>
        <p className="desc">{desc}</p>
        <h2 className="h2">{h2}</h2>
        <img className="img" src={img} alt="" />
        <p className="descimg">{descImg}</p>
      </div>

      <div className="container">
        <div id="inputs">
          <h1 id="title-input">Inputs</h1>

          <label>
            <span>Título (h1)</span>
            <input className="w-96 text-left px-5" value={h1} onChange={(e) => setH1(e.target.value)} />
          </label>

          <label>
            <span>Descrição (p)</span>
            <input className="w-96 text-left px-5" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </label>

          <label>
            <span>Título da imagem (h2)</span>
            <input className="w-96 text-left px-5" value={h2} onChange={(e) => setH2(e.target.value)} />
          </label>

          <label>
            <span>Link da imagem (src)</span>
            <input className="w-96 text-left px-5" value={img} onChange={(e) => setImg(e.target.value)} />
          </label>

          <label>
            <span>Descrição da imagem (p)</span>
            <input className="w-96 text-left px-5" value={descImg} onChange={(e) => setDescImg(e.target.value)} />
          </label>
        </div>

        <div className="direita">
          <h1 id="codigo">Código</h1>
          <h1>
            &lt;<span className="tag">h1</span>&gt;
            <span className="tag-content">{h1}</span>
            &lt;/<span className="tag">h1</span>&gt;
          </h1>
          <h1>
            &lt;<span className="tag">p</span>&gt;
            <span className="tag-content">{desc}</span>
            &lt;/<span className="tag">p</span>&gt;
          </h1>
          <h1>
            &lt;<span className="tag">h2</span>&gt;
            <span className="tag-content">{h2}</span>
            &lt;/<span className="tag">h2</span>&gt;
          </h1>
          <h1>
            &lt;<span className="tag">img</span>{" "}
            <span className="attribute">src="{img}"</span> /&gt;
          </h1>
          <h1>
            &lt;<span className="tag">p</span>&gt;
            <span className="tag-content">{descImg}</span>
            &lt;/<span className="tag">p</span>&gt;
          </h1>

          <button onClick={handleStartFase} id="completou" className="btn-finalizar">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
