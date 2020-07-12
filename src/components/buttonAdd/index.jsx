import React from 'react';

const ButtonAdd = ({ openForm }) => {
  return (
    <button
      className="waves-effect waves-light btn deep-purple lighten-5 black-text ml20"
      onClick={() => openForm()}
    >
      <i className="material-icons left">add</i> Добавить карточку
    </button>
  );
};

export default ButtonAdd;
