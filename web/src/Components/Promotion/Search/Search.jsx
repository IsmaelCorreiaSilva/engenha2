import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import PromotionList  from '../List/List.jsx'

import './Search.css'

const PromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    const params = {};
    if(search){
      params.title_like = search;
    }
    useEffect(()=>{
      Axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', {params})
        .then((response) =>{
        setPromotions(response.data)
      })
    },[search]);
  
    return (
    <div className="promotion-search">
        <header  className="promotion-search-header">
            <h1>Promo Show</h1>
            <Link to="/create">Nova Promoção</Link>
        </header>

        <input type="search" className="promotion-search-input" placeholder="Buscar" value={search} onChange={(ev)=> setSearch(ev.target.value)}
        />

        <PromotionList promotions={promotions} loading={!promotions.length}/>
       
    </div>
  )  
}
export default PromotionSearch;