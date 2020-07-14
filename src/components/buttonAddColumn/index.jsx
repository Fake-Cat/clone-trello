import React from 'react';

const ButtonAddColumn = ({ openForm }) => {
  return (
    <button
      className="waves-effect waves-light btn deep-purple lighten-5 black-text ml20 btnAddColumn"
      onClick={() => openForm()}
    >
      <i className="material-icons left">add</i> <span>Добавить колонку</span>
    </button>
  );
};

export default ButtonAddColumn;
