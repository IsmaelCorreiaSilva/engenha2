import React from 'react'
import  './List.css'
import PromotionCard  from '../Card/Card.jsx'

const PromotionList = ({loading, promotions }) =>{
    if(loading){
        return  <div>Carregando...</div>
    }
    return (
        <div className="promotion-list">
             { promotions.map((promotion)=>(
            <PromotionCard key={promotion.id} promotion={promotion}/>
        ))}
        </div>
    );
}
export default PromotionList;