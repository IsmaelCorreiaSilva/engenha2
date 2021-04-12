import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Form.css'
import Axios  from 'axios'
//import PromotionList from '../List/List'

const initialValue = {
    title: '',
    url: '',
    imageUrl:'',
    price:0,
}

const PromotionForm = ({id}) => {
    const [values, setValues] = useState(id?null:initialValue);
    const history = useHistory();
    //console.log(id)

    useEffect(()=>{
        //console.log(id)
        if(id){
            Axios.get(`http://localhost:5000/promotions/${id}`)
            .then((response)=>{
                console.log(response.data)
                setValues(response.data)
            })
        }
    },[]);

    function onChange(ev){
        const {name, value} = ev.target;
        setValues({...values, [name]: value})
    }
    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? "put" : "post";

        const url = id ? `http://localhost:5000/promotions/${id}` :
        'http://localhost:5000/promotions';

        Axios[method](url, values)
        .then((response)=>{
            history.push('/');
        });
    }
    if(!values){
        return <div>Carregando...</div>
    }
    return (
        <div>
            <h1>PROMO SHOW</h1>
            <h2>Nova Promoção</h2>
            <form onSubmit={onSubmit}>
                <div className="promotion-form-group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" value={values.title} onChange={onChange} />
                </div>
                <div className="promotion-form-group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" value={values.url} onChange={onChange}/>
                </div>
                <div className="promotion-form-group">
                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" value={values.imageUrl} onChange={onChange}/>
                </div>
                <div className="promotion-form-group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" value={values.price} onChange={onChange} />
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}
export default PromotionForm;