import { CREATE_BOARD, CURRENT_BOARD } from '../action/types';

let initialState = {
  board: [
    {
      id: '6d1c7f21-68db-433c-a37a-26467363672b',
      name: 'тест',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'описание',
      card: [],
    },
  ],
  currentBoard: {
    id: '6d1c7f21-68db-433c-a37a-26467363672b',
    name: 'тест',
    logo: 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
    text: 'описание',
    card: []
  }
};

export const appReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
