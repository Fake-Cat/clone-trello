import React from 'react';
import FormAddCard from '../../pages/formAddCard';

const Column = ({ column }) => {
  return (
      <div className="column-wrapper">
        <div className="column-block">
          <span className="column-block__title">{column.title}</span>
          <ul className="column-block__list">
            {column.item &&
              column.item.map((list, index) => (
                <li className="column-block__text" key={index}>
                  {list}
                </li>
              ))}
          </ul>
          <FormAddCard />
        </div>
      </div>
  );
};

export default Column;
