import React, { useEffect, useState } from  'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/Movies';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';

export default () => {
    
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect( () => {
        const loadAll = async () => {
            // pegando a lista de filmes
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            //console.log(list)

            // pegando o filme em destaque
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[randomChosen];

            // console.log(chosen)
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

            // console.log(chosenInfo);
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect( () => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            }
            else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);


    return (
        <div className="page">

            <Header black={blackHeader}/>

            { featuredData && 
                <FeaturedMovie item = {featuredData} />
            }

            <section className="lists">
                {movieList.map( (item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} alt={item.original_name}/>
                ))}
            </section>

            <footer>
                <small>Direitos para B7Web && Netflix - Dados pegos do site Themoviedb.org</small>
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
                </div>
            }
        </div>
        
    );
    
}