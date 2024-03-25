import React from "react";


function Cards(prosp){

function handleClick(){
    prosp.onCardClick(prosp.card)
}


return(
  <div className="element__template">
  <img className="element__img" alt={prosp.card.name} src={prosp.card.link} onClick={handleClick} />
  <div className="element__info">
    <button className="element__trash" type="button" aria-label="Удалить"></button>
    <h2 className="element__name">{prosp.card.name}</h2>
    <div className="element__like-div">
      <button className="element__like" type="button" aria-label="Лайк"></button>
      <p className="element__like-counter">{prosp.card.likes.length}</p>
    </div>
  </div>
</div>
)
}

export default Cards;