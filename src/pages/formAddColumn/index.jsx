import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const FormAddColumn = ({click}) => {
  const [formOpen, setFormOpen] = useState(false);

  const [column, setColumn] = useState(null);

  const handleInputText = (e) => {
    setColumn(e.target.value);
  };

  const onClickAddColumn = useCallback(() => {
    click(column);
    setFormOpen(false);
    setColumn(null);
  }, [click, setFormOpen, setColumn, column]);



  return (
    <React.Fragment>
      {formOpen ? (
        <div className="input-field ml20 formAdd">
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
              onClick={() => onClickAddColumn(column)}
            >
              <i className="material-icons left ">add</i> Добавить карточку
            </button>
            <i
              className="material-icons right close"
              onClick={() => setFormOpen(false)}
            >
              close
            </i>
          </div>
        </div>
      ) : (
        <button
          className="waves-effect waves-light btn deep-purple lighten-5 black-text ml20 btnAddColumn"
          onClick={() => setFormOpen(true)}
        >
          <i className="material-icons left">add</i>{' '}
          <span>Добавить колонку</span>
        </button>
      )}
    </React.Fragment>
  );
};
export default FormAddColumn;
