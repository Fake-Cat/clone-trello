import React from 'react';
import { connect } from 'react-redux';

import './listOfTable.scss';

class ListOfTable extends React.Component {
  render() {
    if (this.props.board.length === 0) {
      return (
        <div className="container">
          <div className="heading-wrapper">
            <div className="center-align heading">
              <h2>Пока что здесь пусто</h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          {this.props.board &&
            this.props.board.map((item) => (
              <div className="col s4 mt20">
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
                    <button
                      className="btn waves-effect waves-light blue darken-1 width100"
                      type="submit"
                    >
                      Открыть
                    </button>
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

export default connect(mapStateToProps, null)(ListOfTable);
