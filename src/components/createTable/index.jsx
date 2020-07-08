import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useMessage } from '../../hooks/message.hook';
import { createBoard } from '../../redux/action';

import './createTable.scss';

const CreateTable = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  
  //* сброс инпутов *//
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

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
    validateFormInput(form);
  };

  /* валидация формы */
  const message = useMessage();
  const [nameError, setNameError] = useState(null);
  const [logoError, setLogoError] = useState(null);

  const validateFormInput = useCallback(
    ({ name, logo }) => {
      const nameError = 'Проверьте правильность заполнения названия доски';
      const logoError = 'Проверьте правильность URL-изображения';
      const statusOk = 'Таблица создана';
      try {
        if (logo && name) {
          dispatch(createBoard(form));
          message(statusOk);
          history.push('/list');
        } else {
          throw new Error();
        }
      } catch (error) {
        if (!name) {
          message(nameError);
          setNameError({ name: nameError });
        } else {
          message(null);
          setNameError(null);
        }
        if (!logo) {
          message(logoError);
          setLogoError({ logo: logoError });
        } else {
          message(null);
          setLogoError(null);
        }
      }
    },
    [message, history, dispatch, form]
  );

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
              className={!nameError ? 'blue-input' : 'error'}
            />
            <label htmlFor="name">Название доски</label>
          </div>
          <div className="input-field offset-s1 col s10">
            <input
              placeholder="http://site.ru/img"
              name="logo"
              type="text"
              className={!logoError ? 'blue-input' : 'error'}
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
