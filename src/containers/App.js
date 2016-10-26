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
    const flights = this.props.flightsIds
    const flightsEntities = this.props.flightsEntities
    return <div>
      <p>Flights list</p>
      <CarrierSelect carriers={this.props.carriers} filterFlightsByCarrier={this.props.actions.filterFlightsByCarrier}/>
      {
        this.props.fetching ?
          <div>{ this.props.fetchingError ? 'Error' : 'Loading...' }</div> :
          flights.map(f => {
            return (
              <FlightInfo key={f} data={flightsEntities[f]} />
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
