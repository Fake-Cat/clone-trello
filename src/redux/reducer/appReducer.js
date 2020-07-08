import { CREATE_BOARD } from '../action/types';

let initialState = {
  board: [
    {
      name: 'тест',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'тест',
    },
  ],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        board: state.board.concat(action.payload),
      };
    default:
      return state;
  }
};
