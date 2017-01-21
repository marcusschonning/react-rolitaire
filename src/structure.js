state.game = {
  suits: {
    1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    2: [14, 15, 16, 17 ..... ],
    3: [],
    4: [],
  },
  board: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  },
  deck: {
    drawn: [1, 2, 3, 4, 5, 5 ... 52],
    notDrawn: [],
  },
  cardsById: {
    1: {
      id: 1, // 1-52
      value: 1, // 1-13
      suit: 'hearts', // hearts/diamonds/clubs/spades
      suitColor: 'red' // red/black
      suitValue: 1, // 1-4
      show: false,
    },
  },
};
