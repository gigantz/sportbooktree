import React, { Component } from 'react'
import League from './League'

class Country extends Component {
  constructor(props) {
    super(props);
    this.expandList = this.expandList.bind(this)
  }

  state = {
    expand: false
  }

  expandList (e) {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    const { name, total, leagues } = this.props
    const { expand } = this.state

    const leagueList = () => {
      return leagues
        .sort((a, b) => {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        })
        .map(league => (
          <League key={league.id} {...league} />
        ))
    }

    return (
      <li className='country'>
        <div className='country__list' onClick={this.expandList}>
          <span className='country__name'>{name}</span>
          <span className='country__total'>{total}</span>
        </div>
        <ul className={'league-list ' + (expand ? 'expanded' : '')}>
          {leagueList()}
        </ul>
      </li>
    )
  }
}

export default Country
