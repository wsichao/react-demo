import { configureStore } from '@reduxjs/toolkit'

const reducer = (state = 10, action) => {
  switch(action.type){
    case 'increase':
      debugger
      return state + 1;
    case 'decrease':
      return state - 1;
    default:
      return state;
  }
}

export default configureStore({
  reducer: reducer
})