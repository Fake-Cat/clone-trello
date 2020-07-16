import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { currentBoardSelected } from '../../redux/action';

import './listOfBoard.scss';

const ListOfBoard = () => {
  const board = useSelector((state) => state.app.board);

  const dispatch = useDispatch();

  const handleSubmit = (item, id) => {
    dispatch(currentBoardSelected(item, id));
  };
  
  return (
    <React.Fragment>
      {board.length === 0 ? (
        <div className="container">
          <div className="heading-wrapper">
            <div className="center-align heading">
              <h2>Пока что здесь пусто</h2>
              <Link to="/create">
                <button
                  className="btn waves-effect waves-light blue darken-1 mt20 pulse"
                  type="submit"
                >
                  создать
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {board &&
              board.map((item, id) => (
                <div className="col xl4 l5 s12 m6 mt20" key={id}>
                  <div className="card small">
                    <div className="card-image">
                      <img src={item.logo} alt="логотип доски" />
                      <span className="card-title center-align ">
                        {item.name}
                      </span>
                    </div>
                    <div className="card-content center-align ">
                      <p>{item.text}</p>
                    </div>
                    <div className="card-action center-align  ">
                      <Link to={`board/${item.link}`}>
                        <button
                          className="btn waves-effect waves-light blue darken-1 width100"
                          type="submit"
                          onClick={() => handleSubmit(item, id)}
                        >
                          Открыть
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ListOfBoard;
