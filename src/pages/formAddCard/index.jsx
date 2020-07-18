import React from 'react';
import { useState } from 'react';

const FormAddCard = ({ onClickAddList, id }) => {
  const [openForm, setOpenForm] = useState(false);

  const [card, setCard] = useState(null);

  const handleITeaxAreaText = (e) => {
    setCard(e.target.value);
  };

  const onclickAddItem = (card, id) => {
    onClickAddList(card, id);
    setOpenForm(false);
    setCard(null);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setCard({
      card: null,
    });
  };
  return (
    <React.Fragment>
      {!openForm ? (
        <div className="column-form__button-addcard center">
          <i className="material-icons left">add</i>
          <span onClick={() => setOpenForm(true)}>Добавить карточку</span>
        </div>
      ) : (
        <div className="column-form">
          <textarea
            id="description"
            className="column-form__textarea"
            name="text"
            placeholder="Введите название карточки"
            onChange={handleITeaxAreaText}
          />
          <div className="column-form__button">
            <button
              className="waves-effect waves-light btn teal lighten-1"
              onClick={() => onclickAddItem(card, id)}
            >
              <i className="material-icons left ">add</i> Добавить карточку
            </button>
            <i
              className="material-icons right close"
              onClick={() => handleCloseForm()}
            >
              close
            </i>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FormAddCard;
