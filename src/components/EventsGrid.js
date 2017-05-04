import React from 'react';
import moment from 'moment'
import { fetchMatches } from '../actions'
import { connect } from 'react-redux'

class EventsGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMatches())
  }

  render() {
    const { isLoading, error, data } = this.props.matches

    const matchList = () => {
      if (!isLoading && !error && data) {
        return data.map(({ sd, h, a, id }) => {
          return (
            <tr key={id}>
              <td>{moment(sd).format('MM-DD HH:mm')}</td>
              <td>{h} : {a}</td>
              <td>-</td>
            </tr>
          )
        })
      }
    }

    return (
      <div className='event-list'>
        <table cellSpacing={0} cellPadding={2}>
          <thead>
            <th>Start Date</th>
            <th>Pairs</th>
            <th>Odds</th>
          </thead>
          <tbody>
            {matchList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (state) => ({ matches: state.matches, layout: state.layout.data }),
  (dispatch) => ({ dispatch })
)(EventsGrid)
