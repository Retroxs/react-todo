const INCREASE = "INCREASE";

const DECREASE = "DECREASE";

export function increaseAction() {
  return { type: INCREASE };
}

export function decreaseAction() {
  return { type: DECREASE };
}

export function setCounter (state = {count: 0}, action) {  
  switch (action.type) {  
      case INCREASE:
          return {count: state.count + 1};  
      case DECREASE:
          return {count: state.count - 1}  
      default:  
          return state;  
  }  
}  

export default setCounter;  