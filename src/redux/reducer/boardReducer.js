import {
  CREATE_BOARD,
  CURRENT_BOARD,
  ADD_CARD_TO_BOARD,
} from '../action/types';

let initialState = {
  board: [
    {
      link: '996b942d-e716-4345-bbe4-d0ea16945887',
      name: 'Сергей',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: '123123',
      card: [],
    },
  ],
  currentBoard: {
    id: 0,
    item: {
      link: '996b942d-e716-4345-bbe4-d0ea16945887',
      name: 'Сергей',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: '123123',
      card: [],
    },
  },
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
    case ADD_CARD_TO_BOARD:
      const currentItem = state.currentBoard.id;
      const currentCard = state.board[currentItem].card;
      return {
        ...state,
        [currentCard]: [...currentCard, action.payload],
      };
    default:
      return state;
  }
};
