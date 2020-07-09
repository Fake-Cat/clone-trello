import React from 'react';
import { connect } from 'react-redux';

import BoardPanel from '../../components/boardPanel';

class Board extends React.Component {
  render() {
    return (
      <div>
        <BoardPanel boardName={this.props.board.name} />
        <h1>BOARD {this.props.board.id}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.app.currentBoard,
});
export default connect(mapStateToProps, null)(Board);
