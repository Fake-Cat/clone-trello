import React from 'react';
import { connect } from 'react-redux';

import BoardPanel from '../../components/boardPanel';

import './board.scss';
import { addCard } from '../../redux/action';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formOpen: false,
      text: '',
    };
  }

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
      text: '',
    });
  };

  handleInputText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <BoardPanel boardName={this.props.board.name} />
          {this.state.formOpen ? (
            <div className="input-field col s3 ml20 mt40">
              <textarea
                id="description"
                className="materialize-textarea mb20"
                name="text"
                onChange={this.handleInputText}
              />
              <label htmlFor="description">Введите название карточки</label>
              <div className="valign-wrapper">
                <button
                  className="waves-effect waves-light btn teal lighten-1  flex-1"
                  onClick={() => this.props.addCard(this.state.text)}
                >
                  <i className="material-icons left ">add</i> Добавить карточку
                </button>
                <i
                  className="material-icons right close"
                  onClick={() =>  this.closeForm()}
                >
                  close
                </i>
              </div>
            </div>
          ) : (
            <div className="mt20">
              <button
                className="waves-effect waves-light btn deep-purple lighten-5 black-text ml20"
                onClick={() => this.openForm()}
              >
                <i className="material-icons left">add</i> Добавить карточку
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.currentBoard,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (item) => {
      debugger;
      dispatch(addCard(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
