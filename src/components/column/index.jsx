import React, { useCallback, useState, useEffect } from 'react';
import FormAddCard from '../../pages/formAddCard';
import { useDispatch } from 'react-redux';
import { addListItem } from '../../redux/action';
import ColumnList from '../columnList';

const Column = React.memo(({ column, id }) => {
  const [updateList, setUpdateList] = useState(null);

  const dispatch = useDispatch();

  const onClickAddList = useCallback(
    (text, id) => {
      dispatch(addListItem(text, id));
      setUpdateList(text, id);
    },
    [dispatch]
  );
  useEffect(() => {
    setUpdateList();
  }, [updateList]);
  return (
    <div className="column-wrapper">
      <div className="column-block">
        <span className="column-block__title">{column.title}</span>
        <ul className="column-block__list">
          {column.item &&
            column.item.map((list, index) => (
              <ColumnList list={list} key={index} id={index} />
            ))}
        </ul>
        <FormAddCard onClickAddList={onClickAddList} id={id} />
      </div>
    </div>
  );
});

export default Column;
