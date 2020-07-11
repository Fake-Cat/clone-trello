import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { currentBoardSelected } from '../../redux/action';

import './listOfBoard.scss';

class ListOfBoard extends React.Component {
  handleSubmit = (item, id) => {
    this.props.currentBoardSelected(item, id);
  };
  render() {
    if (this.props.board.length === 0) {
      return (
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
      );
    }
    return (
      <div className="container">
        <div className="row">
          {this.props.board &&
            this.props.board.map((item, id) => (
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
                        onClick={() => this.handleSubmit(item, id)}
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
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.board,
});

const mapDispatchToProps = (dispatch) => {
  return {
    currentBoardSelected: (item, id) => {
      dispatch(currentBoardSelected(item, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfBoard);
