import {Map} from 'immutable'

export default function reducer(state={ turn: 'X', winner: null, board: new Map()}, action) {
  
  // state.board.setIn(action.position, state.turn)
  // console.log(state.board)
  
  if(action.type === "MOVE"){
    const newBoard = boardReducer(state.board, action)
    const winnerState = winner(newBoard)
    
    return {
      turn: turnReducer(state.turn, action), 
      board: newBoard,
      winner: winnerState
    }

  }
  else return state;
}

const turnReducer = (turn= 'X', action) => {
  switch (action.turn) {
    case "X":
      return "O"

    case "O": 
      return "X"
  }

}

const boardReducer = (board= Map(), action) => {
  return board.setIn(action.position, action.turn);
  
}

export const move = (turn, position) => ({
  type: "MOVE",
  position,
  turn
})

const winner = board => {
  

  const boardstate = []
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      boardstate.push(board.getIn([i,j]))
    }
  }

  if ((board.getIn([0,0]) === board.getIn([0,1]) && board.getIn([0,1])!==undefined  &&board.getIn([0,1])===board.getIn([0,2]))) {
    return board.getIn([0,0])
  } else if (board.getIn([1,0]) === board.getIn([1,1]) &&board.getIn([1,1])!==undefined  &&board.getIn([1,1])===board.getIn([1,2])) {
    return board.getIn([1,0])
  } else if(board.getIn([2,0]) === board.getIn([2,1]) &&board.getIn([2,1])!==undefined  &&board.getIn([2,1])===board.getIn([2,2])) {
    return board.getIn([2,0])
  } else if(board.getIn([0,0]) === board.getIn([1,0]) &&board.getIn([1,0])!==undefined  &&board.getIn([1,0])===board.getIn([2,0])) {
    return board.getIn([0,0])
  } else if(board.getIn([0,1]) === board.getIn([1,1]) &&board.getIn([1,1])!==undefined  &&board.getIn([1,1])===board.getIn([2,1])) {
    return board.getIn([0,1])
  } else if(board.getIn([0,2]) === board.getIn([1,2]) &&board.getIn([1,2])!==undefined  &&board.getIn([1,2])===board.getIn([2,2])) {
    return board.getIn([0,2])
  } else if(board.getIn([0,0]) === board.getIn([1,1]) &&board.getIn([1,1])!==undefined  &&board.getIn([1,1])===board.getIn([2,2])) {
    return board.getIn([0,0])
  } else if(board.getIn([2,0]) === board.getIn([1,1]) &&board.getIn([1,1])!==undefined  &&board.getIn([1,1])===board.getIn([0,2])) {
    return board.getIn([2,0])
  } else if(!boardstate.includes(undefined)) {
    return "draw"
  }
    else {
    return null
  }
}