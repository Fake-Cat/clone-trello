import React from 'react';
import { connect } from 'react-redux';

import BoardPanel from '../../components/boardPanel';
import { addCard } from '../../redux/action';
import FormAdd from '../../components/formAdd';
import ButtonAdd from '../../components/buttonAdd';

import './board.scss';

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
  onClickAddCart = () => {
    this.props.addCard(this.state.text);
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
              <FormAdd
                closeForm={this.closeForm}
                handleInputText={this.handleInputText}
                onClickAddCart={this.onClickAddCart}
              />
            ) : (
              <ButtonAdd openForm={this.openForm} />
            )}
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.currentBoard.item,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (text) => {
      dispatch(addCard(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
