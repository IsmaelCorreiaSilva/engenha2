import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'


const PromotionCard = ({promotion}) =>(
    <div className="promotion-card">
        <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card-image"/>
        <div className="promotion-card-info">
            <h1 className="promotion-card-title">{promotion.title}</h1>
            <span className="promotion-card-price">R$ {promotion.price}</span>
            <footer className="promotion-card-footer">
                {promotion.comments.length > 0 && (
                    <div className="promotion-card-comment">{promotion.comments[0].comment}</div>
                )}
                <div className="promotion-card-comment-count">{promotion.comments.length}{' '}
                {promotion.comments.length > 0? 'Comentários':'Comentário'}</div>
                <a href={promotion.url} target="_blank"  className="promotion-card-link">IR PARA O SATI</a>
                <Link to={`/edit/${promotion.id}`}>Editar</Link>
            </footer>
        </div>
    </div>
    
);

export default PromotionCard;