import React, { useCallback, useState, useEffect } from 'react';

import FormAddCard from '../../pages/formAddCard';
import { useDispatch } from 'react-redux';
import { addListItem } from '../../redux/action';
import ColumnList from '../columnList';
import { Droppable } from 'react-beautiful-dnd';

const Column = React.memo(({ column, columnIndex, onReorder }) => {
  const [updateList, setUpdateList] = useState(null);

  const dispatch = useDispatch();

  const onClickAddList = useCallback(
    (text, columnIndex) => {
      dispatch(addListItem(text, columnIndex));
      setUpdateList(text, columnIndex);
    },
    [dispatch]
  );
  useEffect(() => {
    setUpdateList();
  }, [updateList]);

  return (
    <Droppable droppableId={`column-${columnIndex}`}>
      {(provided) => (
        <div
          className="column-wrapper"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="column-block">
            <span className="column-block__title">{column.title}</span>
            <ul className="column-block__list">
              {column.item &&
                column.item.map((list, index) => (
                  <ColumnList
                    list={list}
                    key={index}
                    cardIndex={index}
                    columnIndex={columnIndex}
                  />
                ))}
            </ul>
            {provided.placeholder}
            <FormAddCard
              onClickAddList={onClickAddList}
              columnIndex={columnIndex}
            />
          </div>
        </div>
      )}
    </Droppable>
  );
});

export default Column;
