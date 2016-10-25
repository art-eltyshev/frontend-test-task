import React, { Component } from 'react'

export default class CarrierSelect extends Component {
  onChange(e) {
    this.props.filterFlightsByCarrier(e.target.value)
  }

  render() {
    return <select onChange={this.onChange.bind(this)}>
      <option value="">All</option>
      {this.props.carriers.map(carrier => {
        return (
          <option key={carrier} value={carrier}>{carrier}</option>
        )
      })}
    </select>
  }
}
