import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
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
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(null);

  useEffect(() => {
    setUpdate();
  }, [update]);

  const onClickAddColumn = useCallback(
    (column) => {
      dispatch(addColumn(column));
      setUpdate(column);
    },
    [dispatch]
  );

  return (
    <div className="container-fluid">
      <div className="board-block">
        <BoardPanel boardName={name} />
        <div className="column">
          {card &&
            card.map((item, index) => (
              <Column key={index} column={item} id={index} />
            ))}
          <FormAddColumn addColumn={onClickAddColumn} />
        </div>
      </div>
    </div>
  );
};

export default connect()(Board);
