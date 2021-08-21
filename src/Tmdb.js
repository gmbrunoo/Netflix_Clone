const API_KEY = '206aff9fe4bf34676a746c30f9a4b034';
const API_BASE = 'https://api.themoviedb.org/3';
const language = `&language=pt-BR&api_key=${API_KEY}`

/*
    originais da netflix
    recomendados
    em alta
    ação
    comédia
    terror
    romance
    documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug:  'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213${language}`)
            },
            {
                slug:  'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${language}`)
            },
            {
                slug:  'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${language}`)
            },
            {
                slug:  'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28${language}`)
            },
            {
                slug:  'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35${language}`)
            },
            {
                slug:  'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27${language}`)
            },
            {
                slug:  'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749${language}`)
            },
            {
                slug:  'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99${language}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
            }
        }

        return info;
    }
}