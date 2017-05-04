import {
  FETCH_TREE_START,
  FETCH_TREE_END,
  FETCH_TREE_ERR,
  FETCH_LAYOUT_START,
  FETCH_LAYOUT_END,
  FETCH_LAYOUT_ERR,
  FETCH_MATCHES_START,
  FETCH_MATCHES_END,
  FETCH_MATCHES_ERR } from '../actionConst'

export function fetchTree() {
  return function (dispatch) {
    dispatch({ type: FETCH_TREE_START })
    return fetch('/tree.json')
      .then(res => res.json())
      .then(tree => dispatch({
        type: FETCH_TREE_END,
        payload: tree.data
      }))
      .catch(e => dispatch({ type: FETCH_TREE_ERR }))
  }
}

export function fetchLayout() {
  return function (dispatch) {
    dispatch({ type: FETCH_LAYOUT_START })
    return fetch('/layout.json')
    .then(res => res.json())
    .then(layout => dispatch({
      type: FETCH_LAYOUT_END,
      payload: layout.data
    }))
    .catch(e => dispatch({ type: FETCH_LAYOUT_ERR }))
  }
}

export function fetchMatches() {
  return function (dispatch) {
    dispatch({ type: FETCH_MATCHES_START })
    return fetch('/matches.json')
      .then(res => res.json())
      .then(matches => dispatch({
        type: FETCH_MATCHES_END,
        payload: matches.data
      }))
      .catch(e => dispatch({ type: FETCH_MATCHES_ERR }))
  }
}
