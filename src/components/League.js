import React, { Component } from 'react'
import EventsGrid from './EventsGrid'

class League extends Component {

  constructor (props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this)
  }

  eventHandler () {
    this.setState({
      activeEvent: !this.state.activeEvent
    })
  }

  state = {
    activeEvent: false
  }

  render() {
    const { name, total } = this.props

    return (
      <li className='league'>
        <div className='league__list' onClick={this.eventHandler}>
          <span className='league__name'>{name}</span>
          <span className='league__total'>{total}</span>
        </div>
        {this.state.activeEvent ? <EventsGrid /> : ''}
      </li>
    )
  }
}

export default League
