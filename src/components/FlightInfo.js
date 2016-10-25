import React, { Component } from 'react'

export default class FlightInfo extends Component {
  formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  }

  render() {
    const flight = this.props.data
    return <div style={{padding: '5px', margin: '10px', border: 'black solid 1px', width: '300px'}}>
      <div>{flight.direction.from} - {flight.direction.to}</div>
      <div>{this.formatDate(flight.departure)} - {this.formatDate(flight.arrival)}</div>
      <div>{flight.carrier}</div>
    </div>
  }
}
