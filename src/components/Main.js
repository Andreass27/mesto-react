import React, {useEffect,useState} from 'react';
import {api} from '../utilits/Api.js'
import Cards from './Cards.js';


function Main(props){


  const [userName, setUserName] = useState();
  const [UserResearcher, setUserResearcher] = useState();
  const [userAvatar, setUserAvatar] = useState();


  useEffect(()=>{
  api.getUserData()
  .then((res) => {
    setUserName(res.name)
    setUserResearcher(res.about)
    setUserAvatar(res.avatar)
  })
  .catch((err) => {
  console.log(err)  
  })
})



const [cards,setCards] = useState([])
useEffect(()=>{
  api.getCards()
  .then((res)=>{
    setCards(res)
  })
  .catch((err)=>{
    console.log(err)
  })
})


return(
  <>
  <section className="profile">
<div className="profile__avatar">
  <div className="profile__overlay">
    <img className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }} src={userAvatar} alt="Аватар профиля" onClick={props.onEditAvatar} ></img>
  </div>
</div>
<div className="profile__info">
  <div className="profile__text">
    <h1 className="profile__name">{userName} </h1>
    <p className="profile__researcher">{UserResearcher}</p>
  </div>
  <button className="profile__edit-button" type="button" id="Editbutton" onClick={props.onEditProfile}></button>
</div>
<button className="profile__add-button" type="button" id="addButton" onClick={props.onAddPlace}></button>
</section>
<section className="elements">{cards.map((item) => (
<Cards onCardClick={props.onCardClick} key={item._id}  card={item}/>
))}
</section>
</>
)
}

export default Main

