import {
  CREATE_BOARD,
  CURRENT_BOARD,
  ADD_COLUMN_TO_BOARD,
  ADD_LIST_ITEM_TO_COLUMN,
  REODER_LIST_ITEM_TO_COLUMN,
} from '../action/types';

const initialState = {
  board: [
    {
      link: '0b85172a-2228-422d-8224-11cce63fd62e',
      name: 'Тестовая',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'тестовая',
      card: [
        {
          title: 'Тестовая',
          item: ['как дела', 'Привет', 'что делаешь'],
        },
        {
          title: 'Тестовая2',
          item: ['Привет2', 'как дела2', 'что делаешь2'],
        },
      ],
    },
    {
      link: '91b658d2-e8f3-4816-b32b-f93171252489',
      name: 'Тестовая-2',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: '123123123',
      card: [
        {
          title: 'Тестовая-1',
          item: ['Тестовая', 'что-что', 'там-там'],
        },
        {
          title: 'Тестовая-2',
          item: ['2', '11', '3'],
        },
      ],
    },
  ],
  currentBoard: [
    {
      link: '0b85172a-2228-422d-8224-11cce63fd62e',
      name: 'Тестовая',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'тестовая',
      card: [
        {
          title: 'Тестовая',
          item: ['Привет', 'как дела', 'что делаешь'],
        },
        {
          title: 'Тестовая2',
          item: ['Привет2', 'как дела2', 'что делаешь2'],
        },
      ],
      id: 0,
    },
  ],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        board: state.board.concat(action.payload),
      };
    case CURRENT_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case ADD_COLUMN_TO_BOARD:
      const currentItem = state.currentBoard[0].id;
      const currentCard = state.board[currentItem].card;
      return {
        ...state,
        ...currentCard.push(action.payload),
      };
    case ADD_LIST_ITEM_TO_COLUMN:
      const { id, item } = action.payload;
      const currentBoard = state.currentBoard[0].id;
      const currentColumn = state.board[currentBoard].card[id].item;
      return {
        ...state,
        ...currentColumn.push(item),
      };
    case REODER_LIST_ITEM_TO_COLUMN: {
      /* const { sourceColumnIndex, list } = action.payload; */
      /* const reorderList = state.board[sourceColumnIndex].card; */
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
