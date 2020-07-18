import React from 'react';

const ColumnList = ({ list }) => {
  return (
    <React.Fragment>
      <li className="column-block__text">{list}</li>
    </React.Fragment>
  );
};

export default ColumnList;
