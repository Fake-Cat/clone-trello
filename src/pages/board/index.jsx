import React from 'react';
import { connect } from 'react-redux';

import BoardPanel from '../../components/boardPanel';
import { addCard } from '../../redux/action';
import FormAddColumn from '../../components/formAddColumn';
import ButtonAddColumn from '../../components/buttonAddColumn';
import FormAddCard from '../../pages/formAddCard';

import './board.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);

    // добавление колонки
    this.state = {
      formOpen: false,
      column: null,
    };
  }
  // добавление колонки
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
      column: null,
    });
  };

  handleInputText = (e) => {
    this.setState({
      column: e.target.value,
    });
  };
  onClickAddCart = () => {
    this.props.addCard(this.state.column);
    this.setState({
      formOpen: false,
      column: null,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="board-block">
          <BoardPanel boardName={this.props.card[this.props.id].name} />
          <div className="column">
            {this.props.card &&
              this.props.card[this.props.id].card.map((item, index) => (
                <div className="column-wrapper" key={index}>
                  <div className="column-block">
                    <span className="column-block__title">{item.title}</span>
                    <ul className="column-block__list">
                      {item.item.map((items, index) => (
                        <li className="column-block__text" key={index}>
                          {items}
                        </li>
                      ))}
                    </ul>
                    <FormAddCard />
                    {/*  {this.state.formAddOpen ? (
                      <FormAddCard
                        key={index}
                        closeAddForm={this.closeAddForm}
                        handleITeaxAreaText={this.handleITeaxAreaText}
                      />
                    ) : (
                      <ButtonAddCard formAddOpen={this.formAddOpen} />
                    )} */}
                  </div>
                </div>
              ))}
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
  id: state.app.currentBoard.id,
  card: state.app.board,
});

export default connect(mapStateToProps, { addCard })(Board);
