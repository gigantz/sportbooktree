import { FETCH_LAYOUT_START, FETCH_LAYOUT_END, FETCH_LAYOUT_ERR } from '../actionConst'

const initialTree = {
  isLoading: false,
  error: false
}

export default function layoutReducer (state = initialTree, action) {
  switch (action.type) {
    case FETCH_LAYOUT_START:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case FETCH_LAYOUT_END:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      }
    case FETCH_LAYOUT_ERR:
      return {
        ...state,
        error: true,
        isLoading: false
      }
    default:
      return state;
  }
}
