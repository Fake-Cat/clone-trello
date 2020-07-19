import {
  CREATE_BOARD,
  CURRENT_BOARD,
  ADD_COLUMN_TO_BOARD,
  ADD_LIST_ITEM_TO_COLUMN,
  REODER_LIST_ITEM_TO_COLUMN,
} from './types';
import { uuid } from 'uuidv4';

export function createBoard({ name, logo, text }) {
  return (dispatch) => {
    const logoREG = /(^https?:\/\/)?[a-z0-9~_\-\\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    const result = logoREG.test(logo);
    if (result) {
      const board = [
        {
          link: uuid(),
          name: name,
          logo: logo,
          text: text,
          card: [],
        },
      ];
      dispatch({ type: CREATE_BOARD, payload: board });
    } else {
      const board = [
        {
          link: uuid(),
          name: name,
          logo:
            'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
          text: text,
          card: [],
        },
      ];
      dispatch({ type: CREATE_BOARD, payload: board });
    }
  };
}

export function currentBoardSelected(item, id) {
  const currentItem = [
    {
      ...item,
      id: id,
    },
  ];
  return {
    type: CURRENT_BOARD,
    payload: currentItem,
  };
}

export function addColumn(text) {
  const column = {
    title: text,
    item: [],
  };
  return {
    type: ADD_COLUMN_TO_BOARD,
    payload: column,
  };
}

export function addListItem(item, id) {
  const items = {
    item: item,
    id: id,
  };
  return {
    type: ADD_LIST_ITEM_TO_COLUMN,
    payload: items,
  };
}

export function reorderList({ source, destination, id }) {
  debugger;
  return async (dispatch, getState) => {
    const state = getState();
    const { index: sourceCardIndex, droppableId: sourceId } = source;
    const {
      index: destinationCardIndex,
      droppableId: destinationId,
    } = destination;
    const sourceColumnIndex = parseInt(sourceId.replace('column-', ''));
    const destinationColumnIndex = parseInt(
      destinationId.replace('column-', '')
    );
    return state.app.board.map((item, currentColumnIndex) => {
      if (destinationColumnIndex === currentColumnIndex) {
        const [sourceCard] = state.app.board[id].card[
          sourceColumnIndex
        ].item.splice(sourceCardIndex, 1);
        const destinationCards = Array.from(
          state.app.board[id].card[sourceColumnIndex].item
        );
        destinationCards.splice(destinationCardIndex, 0, sourceCard);
        state.app.board[id].card[sourceColumnIndex].item = destinationCards;
        const newList = destinationCards;
        dispatch({
          type: REODER_LIST_ITEM_TO_COLUMN,
          payload: {
            list: newList,
            sourceColumnIndex: sourceColumnIndex,
          },
        });
      }
      return item;
    });
  };
}
