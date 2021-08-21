import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth);
        if(x > 0){
            x = 0;
        }
        setScrollX(x)
    }

    const handleNextArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth );
        let listW = items.results.length * 300;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }


    return (
        <div className="movieRow">
            <div className="movieRow--seeMore">
                <h2>{title}
                    <a href="/" >Ver Tudo <span><NavigateNextIcon /></span></a>
                </h2>
            </div>
             
            
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--next" onClick={handleNextArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 300
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}