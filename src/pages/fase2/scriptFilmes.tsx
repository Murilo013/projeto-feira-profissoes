export function initFase2(onFinish?: () => void): () => void {
    let timerId: number | null = null;
    let elapsedTicks = 0;

    const queryInput = document.getElementById('query') as HTMLInputElement | null;
    const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement | null;
    const poster = document.getElementById('poster') as HTMLImageElement | null;
    const poster2 = document.getElementById('poster2') as HTMLImageElement | null;
    const inputSize = document.getElementById('inputSize') as HTMLInputElement | null;
    const acerto = document.getElementById('acerto') as HTMLElement | null;
    const continuar = document.getElementById('completou') as HTMLButtonElement | null;
    const tempoEl = document.getElementById('tempo') as HTMLElement | null;
    const moviesEl = document.querySelector('.movies') as HTMLElement | null;
    const boxEl = document.querySelector('.box') as HTMLElement | null;
    const pageTitle = document.getElementById('pagetitle') as HTMLElement | null;

    if ((window as any).__fase2Init) return () => {};
    (window as any).__fase2Init = true;

    const bannedWords = [
        'Palavrão','Porno','Sexo','Merda','Penis','Caralho','Bosta','Puta','Buceta','Foda','Piroca','Putaquepariu',
        'Filho da puta','Vagem','Putana','Putão','Putaçudo','Porra','Arrombado','Pau','Cocô','Foder','Fuder','Vadia',
        'Viado','Idiota','Estúpido','Inútil','Estuprador','Prostituta','Cretino','Degenerado','Imbecil','Parvo','Besta',
        'Estupidez','Tosco','Cachorro','Cabra','Estrume','Excremento','Palhaço','Desgraçado','Desgraçada','Maldito',
        'Maldita','Mijar','Mijo','Mijão','Mijona','Peste','Piranho','Puto'
    ].map(w => w.toLowerCase());

    const startTimer = () => {
        if (timerId !== null) return;
        timerId = window.setInterval(() => {
            elapsedTicks += 1;
            if (tempoEl) tempoEl.textContent = ` Tempo: ${elapsedTicks}`;
        }, 200);
    };

    const stopTimer = () => {
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
    };

    const sanitizeQuery = (q: string): string => {
        const lower = q.toLowerCase();
        const hasBanned = bannedWords.some(b => lower.includes(b));
        return hasBanned ? 'cute animals' : q;
    };

    async function fetchJson<T>(url: string): Promise<T> {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json() as Promise<T>;
    }

    async function doSearch(rawQuery: string) {
        const query = sanitizeQuery(rawQuery);
        const base = 'https://api.themoviedb.org/3/search/movie';
        const apiKey = '3349c6aa066a33c14a64384200f8c190';

        try {
            const data = await fetchJson<any>(`${base}?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`);
            const first = data?.results?.[0];
            if (first && poster) {
                moviesEl && (moviesEl.style.display = 'flex');
                boxEl && (boxEl.style.display = 'flex');
                pageTitle && (pageTitle.style.marginTop = '25px');
                poster.src = `https://image.tmdb.org/t/p/w500${first.poster_path ?? ''}`;
            }

            const data2 = await fetchJson<any>(`${base}?api_key=${apiKey}&query=${encodeURIComponent('A Rede Social')}&include_adult=false&language=en-US&page=1`);
            const second = data2?.results?.[0];
            if (second && poster2) {
                poster2.src = `https://image.tmdb.org/t/p/w500${second.poster_path ?? ''}`;
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleSearchClick = () => {
        startTimer();
        const q = (queryInput?.value ?? '').trim();
        if (q.length === 0) return;
        void doSearch(q);
    };

    const handleEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const updatePoster = () => {
        if (!poster || !inputSize || !acerto || !continuar) return;
        const val = inputSize.value;
        poster.style.height = `${val}px`;

        if (val === '325') {
            acerto.style.display = 'block';
            continuar.style.display = 'flex';
            inputSize.disabled = true;
            stopTimer();
        }
    };

    const handleFinish = () => {
        if (onFinish) onFinish();
    };

    // Eventos
    searchBtn?.addEventListener('click', handleSearchClick);
    queryInput?.addEventListener('keypress', handleEnter);
    inputSize?.addEventListener('input', updatePoster);
    continuar?.addEventListener('click', handleFinish);

    return () => {
        searchBtn?.removeEventListener('click', handleSearchClick);
        queryInput?.removeEventListener('keypress', handleEnter);
        inputSize?.removeEventListener('input', updatePoster);
        continuar?.removeEventListener('click', handleFinish);
        stopTimer();
        (window as any).__fase2Init = false;
    };
}
