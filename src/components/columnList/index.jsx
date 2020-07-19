import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ColumnList = ({ list, cardIndex, columnIndex }) => {
  return (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <li
          className="column-block__text"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {list}
        </li>
      )}
    </Draggable>
  );
};

export default ColumnList;
