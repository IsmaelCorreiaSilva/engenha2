import React from 'react'
import { useParams } from 'react-router-dom'
import PromotionFrom from '../../../Components/Promotion/Form/Form.jsx'
import UIContainer from '../../../Components/UI/Container/Container.jsx'

const PagesPromotionFrom = () =>{
    const {id} = useParams();
    console.log(id);
  return  (
  <UIContainer>
    <PromotionFrom id={id ? Number.parseInt(id, 10) : null}/>
  </UIContainer>
  );
} 
export default PagesPromotionFrom;