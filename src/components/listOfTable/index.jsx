import React from 'react';
import { useHistory } from 'react-router-dom';


import './listOfTable.scss'

const ListOfTable = () => {
  const history = useHistory();

  const onChangeCreate = () => {
    history.push('/create');
  };
  return (
    <div className="container">
      <div className="heading-wrapper">
        <div className="center-align heading">
          <h2>Пока что здесь пусто</h2>
          <button
            className="btn waves-effect waves-light  blue darken-1 pulse mt20"
            type="submit"
            onClick={onChangeCreate}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListOfTable;
