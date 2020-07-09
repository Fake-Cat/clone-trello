import React from 'react';

import './boardPanel.scss';
import { Link } from 'react-router-dom';

const boardPanel = ({ boardName }) => {
  return (
    <div className="board indigo darken-1">
      <Link to="/list-of-board" className="board-link">
        <i class="material-icons board-icon">keyboard_backspace</i>
      </Link>

      <span className="board-name">{boardName}</span>
    </div>
  );
};

export default boardPanel;
