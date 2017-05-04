import React, { Component } from 'react'
import Country from './Country'

class Sport extends Component {
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
    const { name, total, countries } = this.props
    const { expand } = this.state

    const countryList = () => {
      return countries
        .sort((a, b) => {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        })
        .map(country => (
          <Country key={country.id} {...country} />
        ))
    }

    return (
      <li className='sport'>
        <div className='sport__list' onClick={this.expandList}>
          <span className='sport__name'>{name}</span>
          <span className='sport__total'>{total}</span>
        </div>
        <ul className={'country-list ' + (expand ? 'expanded' : '')}>
          {countryList()}
        </ul>
      </li>
    )
  }
}

export default Sport
