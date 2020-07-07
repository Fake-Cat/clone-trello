import React, { useState, useEffect } from 'react';

import './createTable.scss';
import { useHistory } from 'react-router-dom';

const CreateTable = () => {
  const history = useHistory();

  //* сброс инпутов *//
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  //* сброс инпутов *//

  //* обработка формы *//
  const [form, setForm] = useState({
    name: '',
    logo: '',
    text: '',
  });

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeSubmit = () => {
    if (!create) {
      validateFormInput(form);
    } else {
      history.push('/list');
    }
  };
  //* обработка формы **//

  /* валидация формы */
  const [name, setName] = useState(null);
  const [logo, setLogo] = useState(null);
  const [create, setCreate] = useState(null);

  const validateFormInput = ({ name, logo }) => {
    const nameError = 'Проверьте правильность заполнения названия доски';
    const logoError = 'Проверьте правильность URL-изображения';
    const statusOk = 'Таблица создана';
    if (!name) {
      window.M.toast({ html: nameError });
      setName({ name: nameError });
    } else {
      setName(null);
    }
    if (!logo) {
      window.M.toast({ html: logoError });
      setLogo({ logo: logoError });
    } else {
      setLogo(null);
    }
    if (logo && name) {
      window.M.toast({ html: statusOk });
      setCreate({ create: statusOk });
    }
  };
  /* валидация формы */
  return (
    <div className="container">
      <h1 className="center">Создание доски</h1>
      <div className="row">
        <div className="form-table">
          <div className="input-field offset-s1 col s10">
            <input
              placeholder="Введите название"
              name="name"
              type="text"
              onChange={changeHandler}
              className={!name ? 'blue-input' : 'error'}
            />
            <label htmlFor="name">Название доски</label>
          </div>
          <div className="input-field offset-s1 col s10">
            <input
              placeholder="http://site.ru/img"
              name="logo"
              type="text"
              className={!logo ? 'blue-input' : 'error'}
              onChange={changeHandler}
            />
            <label htmlFor="logo">Вставьте URL-ссылку логотипа*</label>
          </div>
          <div className="input-field offset-s1 col s10">
            <textarea
              id="description"
              className="materialize-textarea blue-input"
              name="text"
              onChange={changeHandler}
            />
            <label htmlFor="description">Описание доски</label>
          </div>
          <div className="center-align">
            <button
              className="btn waves-effect waves-light  blue darken-1"
              type="submit"
              onClick={onChangeSubmit}
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

export default CreateTable;
