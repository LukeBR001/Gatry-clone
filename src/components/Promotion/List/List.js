import React, { useState }from 'react';
import PromotionModal from '../Modal/Modal'
import './List.css'

import PromotionCard from 'components/Promotion/Card/Card';


const PromotionList = ({ loading, error, promotions }) => {
    const [promotionId, setPromotionId] = useState(null)

    if (error) {
        return <div>Algo de errado não está certo...</div>
    }

    if (loading || promotions === null ) {
        return <div>Carregando...</div>
    } 

    if (promotions.length === 0) {
        return <div>Nenhum resultado encontrado.</div>


    }

    return (
        <div className="promotion-list">
            {promotions.map((promotion) => (

             <PromotionCard 
             promotion = {promotion} 
             onClickComments = {() => setPromotionId(promotion.id)}
             />

            ))}
            {promotionId && (
                <PromotionModal 
                    promotionId={promotionId} 
                    onClickClose={() => setPromotionId(null)} 
                />

            )}
        </div>
    )
};

export default PromotionList