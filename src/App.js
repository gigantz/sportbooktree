import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTree, fetchLayout } from './actions'
import Sport from './components/Sport'

class App extends Component  {

  componentDidMount() {
      this.props.dispatch(fetchTree())
      this.props.dispatch(fetchLayout())
  }

  render() {
    const { isLoading, error, data } = this.props.store

    const sports = () => {
      if (!isLoading && !error && data) {
        return data
                .sort((a, b) => b.priority - a.priority)
                .map(sport => <Sport key={sport.id} {...sport} />)
      }
    }

    return (
      <div className='App'>
        {isLoading ? 'Loading...' : <ul className='sport-list'>{sports()}</ul>}
        {error ? 'Fetching Error' : ''}
      </div>
    );
  }
}

export default connect(
  (state) => ({ store: state.tree }),
  (dispatch) => ({ dispatch })
)(App)
