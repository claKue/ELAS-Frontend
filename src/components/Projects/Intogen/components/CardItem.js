import React from 'react'
import {Link} from 'react-router-dom'
import Cards from './Cards'

function CardItem() {
    return (
    <div className="container">
        <div className="row">
        <div className="col-md-4">
            <Card1/>
            </div>
            <div className="col-md-4">
            <Card2/>
            </div>
            <div className="col-md-4">
            <Card3/>
            </div>
            <div className="col-md-4">
            <Card4/>
        </div>
        </div>
    </div>
    )
}

export default CardItem
