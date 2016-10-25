import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CarrierSelect from '../components/CarrierSelect'
import FlightInfo from '../components/FlightInfo'
import * as actions from '../actions'

class App extends Component {
  componentWillMount() {
    this.props.actions.getFlights()
  }

  render() {
    const flights = this.props.filteredFlights || this.props.flights
    return <div>
      <p>Flights list</p>
      <CarrierSelect carriers={this.props.flights.map(f => f.carrier).filter((v, i, arr) => arr.indexOf(v) === i)} filterFlightsByCarrier={this.props.actions.filterFlightsByCarrier}/>
      {
        this.props.fetching ?
          <div>{ this.props.fetchingError ? 'Error' : 'Loading...'}</div> :
          flights.map(flight => {
            return (
              <FlightInfo key={flight.id} data={flight} />
            )
          })
      }
    </div>
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
