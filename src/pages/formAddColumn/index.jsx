import React from 'react';
import { useState } from 'react';
import { useMessage } from '../../hooks/message.hook';

const FormAddColumn = ({ addColumn }) => {
  const [formOpen, setFormOpen] = useState(false);

  const [column, setColumn] = useState(null);

  const message = useMessage();
  
  const handleInputText = (e) => {
    setColumn(e.target.value);
  };

  const onClickAddColumn = () => {
    if (column === null) {
      message('Введите название колонки');
    } else {
      addColumn(column);
      setFormOpen(false);
      setColumn(null);
    }
  };

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
