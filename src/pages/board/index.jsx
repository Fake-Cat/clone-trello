import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import BoardPanel from '../../components/boardPanel';
import Column from '../../components/column';
import FormAddColumn from '../../pages/formAddColumn';
import { addColumn, reorderList } from '../../redux/action';
import './board.scss';
import { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = ({ reorderList }) => {
  const id = useSelector((state) => state.app.currentBoard[0].id);
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

  /* const reorderListCallback = useCallback(
    (source, destination) => {
      dispatch(reorderList({ source, destination }));
    },
    [dispatch]
  ); */

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    reorderList({
      id,
      source,
      destination,
    });
  };

  return (
    <div className="container-fluid">
      <div className="board-block">
        <BoardPanel boardName={name} />
        <div className="column">
          <DragDropContext onDragEnd={onDragEnd}>
            {card &&
              card.map((item, index) => (
                <Column
                  key={index}
                  column={item}
                  columnIndex={index}
                  onReorder={reorderList}
                />
              ))}
          </DragDropContext>
          <FormAddColumn addColumn={onClickAddColumn} />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { reorderList })(Board);
