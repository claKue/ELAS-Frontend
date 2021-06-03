import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) { 
    return (
        <>
            <li className="cards__item">
                <ul className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.h5}>
                        {}
                    </figure>
                    <div className="cards__item__info">
                        <h4 className="cards__item__type">{props.label}</h4>
                        <h5 className="cards__item__text">{props.text} </h5>
                        </div>
                </ul>
            </li>
        </>
    )
}

export default CardItem
