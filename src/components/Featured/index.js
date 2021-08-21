import React, {useEffect} from 'react';
import './FeaturedMovie.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200) + '...'
    }

    useEffect( () => {
         
        const getHeight = () =>{
            let divHeight = document.getElementById('foo').offsetHeight;
            let root = document.querySelector(':root');          
            let rootValues = getComputedStyle(root);

            root.style.setProperty('--deslocamento', `${divHeight}px`);
            console.log(rootValues.getPropertyValue('--deslocamento')); 
        }

        getHeight();
    }, []);

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>

                    <div id="foo" className="featured--fade">
                        {/* <div className="featured--info">
                            <div className="featured-points">{item.vote_average} pontos</div>
                             <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1? 's': ''}</div>
                        </div> */}
                        <div className="featured--description">{description}</div>
                        {}
                    </div>
                    <div className="featured--buttons">
                        <a className="featured--watchbutton" href={`/watch/${item.id}`}><PlayArrowIcon className="featured--watchbutton--icon"/> Assistir</a>
                        <a className="featured--listbutton" href={`/list/add/${item.id}`}><InfoOutlinedIcon className="featured--listbutton--icon"/> Mais informações</a>
                    </div>
                    {/* <div className="featured--genres"><strong>Generos: </strong>{genres.join(', ')}</div> */}
                </div>
            </div>
        </section>
    );
}