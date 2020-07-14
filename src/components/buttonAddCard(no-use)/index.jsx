import React from 'react';

const ButtonAddCard = ({ formAddOpen }) => {
  return (
    <div className="column-form__button-addcard center">
      <i className="material-icons left">add</i>
      <span onClick={() => formAddOpen()}>Добавить карточку</span>
    </div>
  );
};

export default ButtonAddCard;
