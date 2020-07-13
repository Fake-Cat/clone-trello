import React from 'react';
import { connect } from 'react-redux';

import BoardPanel from '../../components/boardPanel';
import { addCard } from '../../redux/action';
import FormAddColumn from '../../components/formAddColumn';
import ButtonAddColumn from '../../components/buttonAddColumn';
import ButtonAddCard from '../../components/buttonAddCard';
import FormAddCard from '../../components/formAddCard';

import './board.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);

    // добавление колонки
    this.state = {
      formOpen: false,
      text: '',
      formAddOpen: false,
      card: '',
    };
  }
  // добавление карточки
  formAddOpen = () => {
    this.setState({
      formAddOpen: true,
    });
  };

  closeAddForm = () => {
    this.setState({
      formAddOpen: false,
      card: '',
    });
  };
  handleITeaxAreaText = (e) => {
    this.setState({
      card: e.target.value,
    });
  };

  // добавление колонки
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
  onClickAddCart = () => {
    this.props.addCard(this.state.text);
    this.setState({
      formOpen: false,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="board-block">
          <BoardPanel boardName={this.props.board.name} />
          <div className="column">
            <div className="column-wrapper">
              <div className="column-block">
                <span className="column-block__title">test</span>
                <ul className="column-block__list">
                  <li className="column-block__text">1</li>
                  <li className="column-block__text">2</li>
                  <li className="column-block__text">1</li>
                  <li className="column-block__text">2</li>
                  <li className="column-block__text">1</li>
                </ul>
                {this.state.formAddOpen ? (
                  <FormAddCard
                    closeAddForm={this.closeAddForm}
                    handleITeaxAreaText={this.handleITeaxAreaText}
                  />
                ) : (
                  <ButtonAddCard formAddOpen={this.formAddOpen} />
                )}
              </div>
            </div>
            {this.state.formOpen ? (
              <FormAddColumn
                closeForm={this.closeForm}
                handleInputText={this.handleInputText}
                onClickAddCart={this.onClickAddCart}
              />
            ) : (
              <ButtonAddColumn openForm={this.openForm} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.currentBoard.item,
});

export default connect(mapStateToProps, { addCard })(Board);
