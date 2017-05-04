import { combineReducers } from 'redux'
import tree from './treeReducer'
import matches from './matchesReducer'
import layout from './layoutReducer'

export default combineReducers({
  tree,
  layout,
  matches
})
