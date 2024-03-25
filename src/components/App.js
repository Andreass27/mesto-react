import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App(){
const[isEditProfilePopupOpen,setisEditProfilePopupOpen]= useState(false)
const[isAddPlacePopupOpen,setisAddPlacePopupOpen]=useState(false)
const[isEditAvatarPopupOpen,setisEditAvatarPopupOpen]=useState(false)
const[selectedCard,setselectedCard]=useState()


function handleEditProfileClick(){
setisEditProfilePopupOpen(true);
}

function handleAddPlaceClick(){
setisAddPlacePopupOpen(true);
}

function handleAvatarClick(){
setisEditAvatarPopupOpen(true);
}

function handleCardclick(card){
setselectedCard(card);
}

function closeAllPopup(){
setisEditProfilePopupOpen(false)
setisAddPlacePopupOpen(false)
setisEditAvatarPopupOpen(false)
setselectedCard();
}

return (
<div className="page">
<Header />


<Main 
onEditProfile={handleEditProfileClick}
onAddPlace={handleAddPlaceClick} 
onEditAvatar={handleAvatarClick}
onCardClick={handleCardclick}
/>


<PopupWithForm name={'type__profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen ? 'popup__open': ''}
onClose={closeAllPopup} buttonText={'Сохранить'}>
<input type="text" className="popup__input" id="popup__name" name="profile_name" placeholder="Имя" required/>
<span className="popup__name-error popup__input-error"></span>
<input type="text" className="popup__input" id="popup__researcher" name="profile_researcher" placeholder="Вид деятельности" required/>
<span className="popup__researcher-error popup__input-error"></span>
</PopupWithForm>


<PopupWithForm name={'type_card-add'} title={'Новое место'} isOpen={isAddPlacePopupOpen ? 'popup__open' : ''}
onClose={closeAllPopup} buttonText={'Сохранить'}>
<input type="text" className="popup__input" id="popup__place" placeholder="название" name="addFormName" required maxlength="30" minlength="2"></input>
<span className="popup__place-error popup__input-error"></span>
<input type="url" className="popup__input" name="addFormUrl" id="popup__link" placeholder="ссылка на картинку" required></input>
<span className="popup__link-error popup__input-error"></span>
</PopupWithForm>


<PopupWithForm name={'avatar'} title={'Вы уверены?'} isOpen={isEditAvatarPopupOpen ? 'popup__open' : ''}
onClose={closeAllPopup} buttonText={'Да'} >
<input type="url" className="popup__input" id="popup__avatar" name="avatarUrl" placeholder="Ссылка на аватар" required></input>
<span className="popup__input-error popup__avatar-error"></span>
</PopupWithForm>


<ImagePopup onClose={closeAllPopup}
card={selectedCard}
/>


<Footer />


</div>
)
}


export default App;
