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
  onClickAddCart = (text) => {
    this.props.addCard(text);
    this.setState({
      formOpen: false,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <BoardPanel boardName={this.props.board.name} />
        <div className="row">
          <section className="column mt20">
            <div className="column-block">
              <span className="column-block__title">test</span>
              <ul>
                <li className="column-block__text">1</li>
                <li className="column-block__text">2</li>
                <li className="column-block__text">3</li>
              </ul>
            </div>

            {this.state.formOpen ? (
              <div className="input-field col s3 ml20 ">
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
                    onClick={() => this.onClickAddCart(this.state.text)}
                  >
                    <i className="material-icons left ">add</i> Добавить
                    карточку
                  </button>
                  <i
                    className="material-icons right close"
                    onClick={() => this.closeForm()}
                  >
                    close
                  </i>
                </div>
              </div>
            ) : (
              <button
                className="waves-effect waves-light btn deep-purple lighten-5 black-text ml20"
                onClick={() => this.openForm()}
              >
                <i className="material-icons left">add</i> Добавить карточку
              </button>
            )}
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.currentBoard.currentItemBoard,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (text) => {
      dispatch(addCard(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
