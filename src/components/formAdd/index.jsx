import React from 'react';

const FormAdd = ({
  closeForm,
  handleInputText,
  onClickAddCart,
}) => {
  return (
    <React.Fragment>
        <div className="input-field col s3 ml20 ">
          <textarea
            id="description"
            className="materialize-textarea mb20"
            name="text"
            onChange={handleInputText}
          />
          <label htmlFor="description">Введите название карточки</label>
          <div className="valign-wrapper">
            <button
              className="waves-effect waves-light btn teal lighten-1  flex-1"
              onClick={(e) => onClickAddCart(e.target.value)}
            >
              <i className="material-icons left ">add</i> Добавить карточку
            </button>
            <i
              className="material-icons right close"
              onClick={() => closeForm()}
            >
              close
            </i>
          </div>
        </div>
    </React.Fragment>
  );
};

export default FormAdd;
