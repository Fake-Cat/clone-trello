import React from 'react';

import './boardPanel.scss';
import { Link } from 'react-router-dom';

const boardPanel = ({ boardName }) => {
  return (
    <div className="board blue darken-1 valign-wrapper">
      <Link to="/list-of-board" className="board-link">
        <i className="material-icons board-icon">keyboard_backspace</i>
      </Link>

      <span className="board-name">{boardName}</span>
    </div>
  );
};

export default boardPanel;
