import React from 'react';

const PokemonThumbnail = ({id, name, image, type,}) => {
    const style = `thumb-container ${type}`
    const type_style = `poke-type type_${type}`  

    return(
        <div className={style}>
            <img src={image} alt={name}/>
            <div>
                <small className='poke-number'>#0{id}</small>
            </div>
            <div className='detail-wrapper'>
                <h3>{name}</h3>
            </div>
                <small className={type_style}>{type}</small>
        </div>
    )
}

export default PokemonThumbnail
