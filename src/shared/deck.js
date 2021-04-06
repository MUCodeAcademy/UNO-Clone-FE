const deck = [
  { value: 0, color: "blue", points: 0 },
  { value: 0, color: "green", points: 0 },
  { value: 0, color: "red", points: 0 },
  { value: 0, color: "yellow", points: 0 },
  { value: 1, color: "blue", points: 1 },
  { value: 1, color: "blue", points: 1 },
  { value: 1, color: "green", points: 1 },
  { value: 1, color: "green", points: 1 },
  { value: 1, color: "red", points: 1 },
  { value: 1, color: "red", points: 1 },
  { value: 1, color: "yellow", points: 1 },
  { value: 1, color: "yellow", points: 1 },
  { value: 2, color: "blue", points: 2 },
  { value: 2, color: "blue", points: 2 },
  { value: 2, color: "green", points: 2 },
  { value: 2, color: "green", points: 2 },
  { value: 2, color: "red", points: 2 },
  { value: 2, color: "red", points: 2 },
  { value: 2, color: "yellow", points: 2 },
  { value: 2, color: "yellow", points: 2 },
  { value: 3, color: "blue", points: 3 },
  { value: 3, color: "blue", points: 3 },
  { value: 3, color: "green", points: 3 },
  { value: 3, color: "green", points: 3 },
  { value: 3, color: "red", points: 3 },
  { value: 3, color: "red", points: 3 },
  { value: 3, color: "yellow", points: 3 },
  { value: 3, color: "yellow", points: 3 },
  { value: 4, color: "blue", points: 4 },
  { value: 4, color: "blue", points: 4 },
  { value: 4, color: "green", points: 4 },
  { value: 4, color: "green", points: 4 },
  { value: 4, color: "red", points: 4 },
  { value: 4, color: "red", points: 4 },
  { value: 4, color: "yellow", points: 4 },
  { value: 4, color: "yellow", points: 4 },
  { value: 5, color: "blue", points: 5 },
  { value: 5, color: "blue", points: 5 },
  { value: 5, color: "green", points: 5 },
  { value: 5, color: "green", points: 5 },
  { value: 5, color: "red", points: 5 },
  { value: 5, color: "red", points: 5 },
  { value: 5, color: "yellow", points: 5 },
  { value: 5, color: "yellow", points: 5 },
  { value: 6, color: "blue", points: 6 },
  { value: 6, color: "blue", points: 6 },
  { value: 6, color: "green", points: 6 },
  { value: 6, color: "green", points: 6 },
  { value: 6, color: "red", points: 6 },
  { value: 6, color: "red", points: 6 },
  { value: 6, color: "yellow", points: 6 },
  { value: 6, color: "yellow", points: 6 },
  { value: 7, color: "blue", points: 7 },
  { value: 7, color: "blue", points: 7 },
  { value: 7, color: "green", points: 7 },
  { value: 7, color: "green", points: 7 },
  { value: 7, color: "red", points: 7 },
  { value: 7, color: "red", points: 7 },
  { value: 7, color: "yellow", points: 7 },
  { value: 7, color: "yellow", points: 7 },
  { value: 8, color: "blue", points: 8 },
  { value: 8, color: "blue", points: 8 },
  { value: 8, color: "green", points: 8 },
  { value: 8, color: "green", points: 8 },
  { value: 8, color: "red", points: 8 },
  { value: 8, color: "red", points: 8 },
  { value: 8, color: "yellow", points: 8 },
  { value: 8, color: "yellow", points: 8 },
  { value: 9, color: "blue", points: 9 },
  { value: 9, color: "blue", points: 9 },
  { value: 9, color: "green", points: 9 },
  { value: 9, color: "green", points: 9 },
  { value: 9, color: "red", points: 9 },
  { value: 9, color: "red", points: 9 },
  { value: 9, color: "yellow", points: 9 },
  { value: 9, color: "yellow", points: 9 },
  { value: "Draw Two", color: "blue", points: 20 },
  { value: "Draw Two", color: "blue", points: 20 },
  { value: "Draw Two", color: "green", points: 20 },
  { value: "Draw Two", color: "green", points: 20 },
  { value: "Draw Two", color: "red", points: 20 },
  { value: "Draw Two", color: "red", points: 20 },
  { value: "Draw Two", color: "yellow", points: 20 },
  { value: "Draw Two", color: "yellow", points: 20 },
  { value: "Reverse", color: "blue", points: 20 },
  { value: "Reverse", color: "blue", points: 20 },
  { value: "Reverse", color: "green", points: 20 },
  { value: "Reverse", color: "green", points: 20 },
  { value: "Reverse", color: "red", points: 20 },
  { value: "Reverse", color: "red", points: 20 },
  { value: "Reverse", color: "yellow", points: 20 },
  { value: "Reverse", color: "yellow", points: 20 },
  { value: "Skip", color: "blue", points: 20 },
  { value: "Skip", color: "blue", points: 20 },
  { value: "Skip", color: "green", points: 20 },
  { value: "Skip", color: "green", points: 20 },
  { value: "Skip", color: "red", points: 20 },
  { value: "Skip", color: "red", points: 20 },
  { value: "Skip", color: "yellow", points: 20 },
  { value: "Skip", color: "yellow", points: 20 },
  { value: "Wild", color: "black", points: 50 },
  { value: "Wild", color: "black", points: 50 },
  { value: "Wild", color: "black", points: 50 },
  { value: "Wild", color: "black", points: 50 },
  { value: "Wild Draw Four", color: "black", points: 50 },
  { value: "Wild Draw Four", color: "black", points: 50 },
  { value: "Wild Draw Four", color: "black", points: 50 },
  { value: "Wild Draw Four", color: "black", points: 50 },
];


export default deck;
