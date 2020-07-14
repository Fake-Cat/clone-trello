import React from 'react';

const FormAddCard = ({ closeAddForm, handleITeaxAreaText, index }) => {

  return (
    <div className="column-form" key={index}>
      <textarea
        id="description"
        className="column-form__textarea"
        name="text"
        placeholder="Введите название карточки"
        onChange={handleITeaxAreaText}
      />
      <div className="column-form__button">
        <button className="waves-effect waves-light btn teal lighten-1">
          <i className="material-icons left ">add</i> Добавить карточку
        </button>
        <i
          className="material-icons right close"
          onClick={() => closeAddForm()}
        >
          close
        </i>
      </div>
    </div>
  );
};

export default FormAddCard;
