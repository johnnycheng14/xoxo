import {Map} from 'immutable'

export default function reducer(state={ turn: 'X', board: new Map()}, action) {
  
  // state.board.setIn(action.position, state.turn)
  // console.log(state.board)
  console.log(action)
 
  if(action.type === "MOVE"){
    const newBoard = state.board.setIn(action.position, state.turn);
  
    switch (action.turn){
      case "X":
        return { turn: "O", board: newBoard };
      case "O":
        return { turn: "X", board: newBoard };
      default:
        return state;
    }

  }
  else return state;
}

export const move = (turn, position) => ({
  type: "MOVE",
  position,
  turn
})