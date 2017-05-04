import { FETCH_MATCHES_START, FETCH_MATCHES_END, FETCH_MATCHES_ERR } from '../actionConst'

const initialTree = {
  isLoading: false,
  error: false
}

export default function matchesReducer (state = initialTree, action) {
  switch (action.type) {
    case FETCH_MATCHES_START:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case FETCH_MATCHES_END:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      }
    case FETCH_MATCHES_ERR:
      return {
        ...state,
        error: true,
        isLoading: false
      }
    default:
      return state;
  }
}
