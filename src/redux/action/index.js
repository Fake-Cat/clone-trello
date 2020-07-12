import { CREATE_BOARD, CURRENT_BOARD, ADD_CARD_TO_BOARD } from './types';
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
  const currentItem = {
    id,
    item,
  };
  return {
    type: CURRENT_BOARD,
    payload: currentItem,
  };
}

export function addCard(text) {
  const card = {
    title: text,
    item: [],
  };
  return {
    type: ADD_CARD_TO_BOARD,
    payload: card,
  };
}
