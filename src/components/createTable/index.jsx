import React from 'react';

import './createTable.scss';

const createTable = () => {
  return (
    <div className="container">
      <h1 className="center">Создание доски</h1>
      <div className="row">
        <div className="form-table">
          <div className="input-field offset-s1 col s10">
            <input
              placeholder="Введите название"
              id="name"
              type="text"
              className="blue-input"
            />
            <label for="name">Название доски</label>
          </div>
          <div className="input-field offset-s1 col s10">
            <input
              placeholder="http://site.ru/img"
              id="logo"
              type="text"
              className="blue-input "
            />
            <label for="logo">Вставьте URL-ссылку логотипа*</label>
          </div>
          <div className="input-field offset-s1 col s10">
            <textarea
              id="description"
              className="materialize-textarea blue-input"
            />
            <label for="description">Описание доски</label>
          </div>
          <div className="center-align">
            <button
              className="btn waves-effect waves-light  blue darken-1"
              type="submit"
            >
              Создать
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createTable;
