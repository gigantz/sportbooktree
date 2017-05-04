import { FETCH_TREE_START, FETCH_TREE_END, FETCH_TREE_ERR } from '../actionConst'

const initialTree = {
  isLoading: false,
  error: false
}

export default function treeReducer (state = initialTree, action) {
  switch (action.type) {
    case FETCH_TREE_START:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case FETCH_TREE_END:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      }
    case FETCH_TREE_ERR:
      return {
        ...state,
        error: true,
        isLoading: false
      }
    default:
      return state;
  }
}
