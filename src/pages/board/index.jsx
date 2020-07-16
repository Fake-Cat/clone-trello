import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import BoardPanel from '../../components/boardPanel';
import Column from '../../components/column';
import FormAddColumn from '../../pages/formAddColumn';
import { addColumn } from '../../redux/action';

import './board.scss';
import { useEffect } from 'react';

const Board = () => {
  const id = useSelector((state) => state.app.currentBoard.id);

  const name = useSelector((state) => state.app.board[id].name);

  const card = useSelector((state) => state.app.board[id].card);

  useEffect(() => {
  }, [card]);

  const dispatch = useDispatch();

  const onClickAddColumn = useCallback(
    (column) => {
      dispatch(addColumn(column));
    },
    [dispatch]
  );

  return (
    <div className="container-fluid">
      <div className="board-block">
        <BoardPanel boardName={name} />
        <div className="column">
          {card &&
            card.map((item, index) => <Column key={index} column={item} />)}
          <FormAddColumn click={onClickAddColumn} />
        </div>
      </div>
    </div>
  );
};

export default Board;
