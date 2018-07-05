import {Map} from 'immutable'

export default function reducer(state={ player: 'X', board: new Map()}, action) {
  
  // state.board.setIn(action.position, state.player)
  // console.log(state.board)
  console.log(action)
 
  if(action.type === "MOVE"){
    const newBoard = state.board.setIn(action.position, state.player);
  
    switch (action.player){
      case "X":
        return { player: "O", board: newBoard };
      case "O":
        return { player: "X", board: newBoard };
      default:
        return state;
    }

  }
  else return state;
}

export const move = (player, position) => ({
  type: "MOVE",
  position,
  player
})