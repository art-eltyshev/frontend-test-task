import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  FILTER_FLIGHTS_BY_CARRIER
} from '../constants'

const initialState = {
  fetching: false,
  fetchingError: false,
  flightsEntities: {},
  flightsOrigIds: [],
  flightsIds: [],
  carriers: []
}

export default function (state = initialState, action) {
  let flightsIds;

  switch (action.type) {
    case GET_FLIGHTS_REQUEST:
      return {
        ...state,
        fetching: true,
        fetchingError: false
      }
    case GET_FLIGHTS_SUCCESS:
      let flights = {}
      flightsIds = []
      let carriers = []

      action.payload.flights.forEach(f => {
        flightsIds.push(f.id)
        flights[f.id] = f
        if (carriers.indexOf(f.carrier) === -1) {
          carriers.push(f.carrier)
        }
      })

      carriers.sort()

      return {
        ...state,
        fetching: false,
        fetchingError: false,
        flightsEntities: flights,
        flightsOrigIds: flightsIds,
        flightsIds: flightsIds,
        carriers: carriers
      }
    case GET_FLIGHTS_ERROR:
      return {
        ...state,
        fetching: false,
        fetchingError: true
      }
    case FILTER_FLIGHTS_BY_CARRIER:
      flightsIds = []

      if (action.payload) {
        state.flightsOrigIds.forEach(k => {
          if (state.flightsEntities[k].carrier === action.payload) {
            flightsIds.push(k)
          }
        })
      } else {
        flightsIds = state.flightsOrigIds
      }

      return {
        ...state,
        flightsIds: flightsIds
      }
    default:
      return state
  }
}
