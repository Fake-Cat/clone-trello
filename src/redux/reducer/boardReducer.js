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
          item: [
            'как дела',
            'Привет',
            'что делаешь',
            'как дела',
            'Привет',
            'что делаешь',
          ],
        },
        {
          title: 'Тестовая2',
          item: ['Привет2', 'как дела2', 'что делаешь2'],
        },
        {
          title: 'Тестовая3',
          item: ['Привет3', 'как дела3', 'что делаешь3'],
        },
      ],
    },
  ],
  currentBoard: [
    {
      id: 0,
      link: '0b85172a-2228-422d-8224-11cce63fd62e',
      name: 'Тестовая',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'тестовая',
      card: [
        {
          title: 'Тестовая',
          item: [
            'как дела',
            'Привет',
            'что делаешь',
            'как дела',
            'Привет',
            'что делаешь',
          ],
        },
        {
          title: 'Тестовая2',
          item: ['Привет2', 'как дела2', 'что делаешь2'],
        },
        {
          title: 'Тестовая3',
          item: ['Привет3', 'как дела3', 'что делаешь3'],
        },
      ],
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
      return {
        ...state,
        board: state.board.map((item) => {
          return {
            ...item,
            card: item.card.concat(action.payload),
          };
        }),
      };
    case ADD_LIST_ITEM_TO_COLUMN:
      const { id, columnItem } = action.payload;
      return {
        ...state,
        board: state.board.map((item) => {
          return {
            ...item,
            card: item.card.map((card, key) => {
              if (key === id) {
                return {
                  title: card.title,
                  item: [...card.item, columnItem],
                };
              }
              return card;
            }),
          };
        }),
      };
    case REODER_LIST_ITEM_TO_COLUMN: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
