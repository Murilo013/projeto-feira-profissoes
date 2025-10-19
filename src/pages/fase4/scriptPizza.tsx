import { NavigateFunction } from 'react-router-dom';

export function initFase4(navigate?: NavigateFunction): () => void {
    let timer: number | null = null;
    let jogoIniciado = false;
    let playerTop = 100;
    let playerLeft = 100;
    let targetTop = 0;
    let targetLeft = 0;
    let score = 0;
    let totalScore = 0;
    let tempojogo = 0;
    let faseCompleta = false;
    let timerId: number | null = null;
    let elapsedTicks = 0;

    // Elementos DOM
    const gameBoard = document.getElementById('gameBoard') as HTMLElement | null;
    const player = document.getElementById('player') as HTMLElement | null;
    const targetSquare = document.getElementById('targetSquare') as HTMLElement | null;
    const message = document.getElementById('message') as HTMLElement | null;
    const scoreDisplay = document.getElementById('score') as HTMLElement | null;
    const totalScoreDisplay = document.getElementById('scoreDisplay') as HTMLElement | null;
    const temporizador = document.getElementById('tempojogo') as HTMLElement | null;
    const valorIteracao = document.getElementById('inputIteração') as HTMLInputElement | null;
    const start = document.getElementById('start') as HTMLButtonElement | null;
    const completou = document.getElementById('completou') as HTMLButtonElement | null;
    const botaoPopup = document.getElementById('botaoPopup') as HTMLButtonElement | null;
    const popup = document.getElementById('popup') as HTMLElement | null;
    const fecharPopup = document.getElementById('fecharPopup') as HTMLElement | null;

    // Elementos do carrinho/pizza
    const pizza1Input = document.getElementById('pizza1') as HTMLInputElement | null;
    const pizza2Input = document.getElementById('pizza2') as HTMLInputElement | null;
    const pizza3Input = document.getElementById('pizza3') as HTMLInputElement | null;
    const formulaInput = document.getElementById('formula') as HTMLInputElement | null;
    const botaoConsertar = document.getElementById('botao1') as HTMLButtonElement | null;
    const mostrar = document.getElementById('mostrar') as HTMLElement | null;
    const erro = document.getElementById('erro') as HTMLElement | null;
    const aviso1 = document.getElementById('aviso1') as HTMLElement | null;
    const correto = document.getElementById('correto') as HTMLElement | null;
    const tempoDisplay = document.getElementById('tempo') as HTMLElement | null;

    if ((window as any).__fase4Init) return () => {};
    (window as any).__fase4Init = true;

    const getRandomPosition = (): number => {
        if (!gameBoard) return 0;
        return Math.floor(Math.random() * (gameBoard.clientHeight - 20));
    };

    const initializeGamePositions = () => {
        if (!player || !targetSquare) return;
        targetTop = getRandomPosition();
        targetLeft = getRandomPosition();
        player.style.top = `${playerTop}px`;
        player.style.left = `${playerLeft}px`;
        targetSquare.style.top = `${targetTop}px`;
        targetSquare.style.left = `${targetLeft}px`;
    };

    const movePlayer = (event: KeyboardEvent) => {
        if (!jogoIniciado || !player || !valorIteracao || tempojogo >= 60) return;
        const valor = Number(valorIteracao.value) || 0;

        switch (event.key) {
            case 'ArrowUp': playerTop -= valor; break;
            case 'ArrowDown': playerTop += valor; break;
            case 'ArrowLeft': playerLeft -= valor; break;
            case 'ArrowRight': playerLeft += valor; break;
            default: return;
        }

        if (!gameBoard) return;
        if (playerTop < 0) playerTop = 0;
        if (playerTop > gameBoard.clientHeight - 20) playerTop = gameBoard.clientHeight - 20;
        if (playerLeft < 0) playerLeft = 0;
        if (playerLeft > gameBoard.clientWidth - 20) playerLeft = gameBoard.clientWidth - 20;

        player.style.top = `${playerTop}px`;
        player.style.left = `${playerLeft}px`;

        checkCollision();
    };

    const checkCollision = () => {
        if (!jogoIniciado || !player || !targetSquare || !scoreDisplay || !totalScoreDisplay) return;

        const playerRect = player.getBoundingClientRect();
        const targetRect = targetSquare.getBoundingClientRect();

        if (
            playerRect.top < targetRect.bottom &&
            playerRect.bottom > targetRect.top &&
            playerRect.left < targetRect.right &&
            playerRect.right > targetRect.left
        ) {
            score++;
            scoreDisplay.textContent = `Pontos: ${score}`;
            moveTarget();
        }

        if (tempojogo === 60) {
            totalScore = score * 15;
            if (start) { start.disabled = true; start.style.opacity = "0.5"; }
            totalScoreDisplay.innerText = totalScore.toString();
            totalScoreDisplay.classList.remove('hidden');
        }
    };

    const moveTarget = () => {
        if (!targetSquare) return;
        targetTop = getRandomPosition();
        targetLeft = getRandomPosition();
        targetSquare.style.top = `${targetTop}px`;
        targetSquare.style.left = `${targetLeft}px`;
    };

    const startGameTimer = () => {
        if (!jogoIniciado || !temporizador) {
            jogoIniciado = true;
            timer = window.setInterval(() => {
                if (tempojogo < 60) {
                    tempojogo++;
                    temporizador.innerText = `${tempojogo} segundos`;
                } else {
                    if (timer !== null) { clearInterval(timer); timer = null; }
                    if (completou) completou.style.display = "flex";
                }
            }, 1000);
        }
    };

    const validateIteracaoInput = () => {
        if (!valorIteracao) return;
        let valor = parseInt(valorIteracao.value);
        if (valor > 50) valor = 50;
        else if (valor < 0) valor = 0;
        valorIteracao.value = valor.toString();
    };

    const showPopup = () => { if (popup) popup.style.display = "block"; };
    const closePopup = () => { if (popup) popup.style.display = "none"; };
    const closePopupOnOutsideClick = (event: MouseEvent) => { if (event.target === popup) closePopup(); };

    const finalizarPizza = () => {
        if (!pizza1Input || !pizza2Input || !pizza3Input || !formulaInput || !mostrar || !erro || !aviso1 || !correto || !botaoConsertar) return;

        const pizza1 = parseFloat(pizza1Input.value);
        const pizza2 = parseFloat(pizza2Input.value);
        const pizza3 = parseFloat(pizza3Input.value);
        const formula = formulaInput.value.trim();

        if (pizza1 !== 40 || pizza2 !== 35 || pizza3 !== 45) {
            erro.textContent = "!! Verifique os valores inseridos !!";
            const totalCalculado = pizza1 + pizza2 + pizza3;
            mostrar.textContent = `Total: R$${totalCalculado}`;
        } else if (!["pizza1+pizza2+pizza3","pizza1 + pizza2 + pizza3","pizza2+pizza1+pizza3","pizza2 + pizza1 + pizza3","pizza3+pizza2+pizza1","pizza3 + pizza2 + pizza1","pizza1+pizza3+pizza2","pizza1 + pizza3 + pizza2","pizza2+pizza3+pizza1","pizza2 + pizza3 + pizza1","pizza3+pizza1+pizza2","pizza3 + pizza1 + pizza2"].includes(formula)) {
            erro.textContent = "!! Insira corretamente a fórmula para o cálculo !!";
        } else {
            const totalPizza = pizza1 + pizza2 + pizza3;
            mostrar.textContent = `Total: R$ ${totalPizza}`;
            erro.textContent = "";
            stopTimer();
            pizza1Input.disabled = pizza2Input.disabled = pizza3Input.disabled = formulaInput.disabled = botaoConsertar.disabled = true;
            correto.style.display = "flex";
            aviso1.style.display = "none";
            if (completou) completou.style.display = "block";
        }
    };

    const startTimer = () => {
        if (timerId !== null) return;
        timerId = window.setInterval(() => {
            elapsedTicks++;
            if (tempoDisplay) tempoDisplay.textContent = `Tempo: ${elapsedTicks}`;
        }, 1000);
    };

    const stopTimer = () => {
        if (timerId !== null) { clearInterval(timerId); timerId = null; }
    };

    const completarFase = async () => {
        const userId = sessionStorage.getItem('userId');
        const nomeColuna = 'tempo_fase4';
        faseCompleta = true;
        stopTimer();

        try {
            const response = await fetch('http://localhost:3000/usuario', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, nomeColuna, tempoFase: elapsedTicks })
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }
            if (navigate) navigate('/fase5/introducao');
            else window.location.href = '/fase5/introducao';
        } catch (error) {
            console.log(error);
            if (navigate) navigate('/fase5/introducao');
            else window.location.href = '/fase5/introducao';
        }
    };

    initializeGamePositions();

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startTimer);
    else startTimer();

    document.addEventListener('keydown', movePlayer);
    start?.addEventListener('click', startGameTimer);
    botaoPopup?.addEventListener('click', showPopup);
    fecharPopup?.addEventListener('click', closePopup);
    window.addEventListener('click', closePopupOnOutsideClick);
    valorIteracao?.addEventListener('input', validateIteracaoInput);
    botaoConsertar?.addEventListener('click', finalizarPizza);
    completou?.addEventListener('click', completarFase);

    return () => {
        document.removeEventListener('keydown', movePlayer);
        document.removeEventListener('DOMContentLoaded', startTimer);
        start?.removeEventListener('click', startGameTimer);
        botaoPopup?.removeEventListener('click', showPopup);
        fecharPopup?.removeEventListener('click', closePopup);
        window.removeEventListener('click', closePopupOnOutsideClick);
        valorIteracao?.removeEventListener('input', validateIteracaoInput);
        botaoConsertar?.removeEventListener('click', finalizarPizza);
        completou?.removeEventListener('click', completarFase);

        if (timer !== null) { clearInterval(timer); timer = null; }
        stopTimer();
        (window as any).__fase4Init = false;
    };
}
