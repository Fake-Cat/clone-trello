import {
  CREATE_BOARD,
  CURRENT_BOARD,
  ADD_CARD_TO_BOARD,
} from '../action/types';

const initialState = {
  board: [
    {
      link: '996b942d-e716-4345-bbe4-d0ea16945887',
      name: 'Тестовая',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: '123123',
      card: [
        {
          title: '123123123',
          item: [
            'Пройти курс по React',
            'Отметить день рождения',
            'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
          ],
        },
      ],
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
      card: [
        {
          title: '123123123',
          item: [
            'Пройти курс по React',
            'Отметить день рождения',
            'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
          ],
        },
      ],
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
        ...currentCard.push(action.payload),
      };
    default:
      return state;
  }
};
