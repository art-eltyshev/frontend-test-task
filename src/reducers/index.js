import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  FILTER_FLIGHTS_BY_CARRIER
} from '../constants'

const initialState = {
  fetching: false,
  fetchingError: false,
  flights: [],
  filteredFlights: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS_REQUEST:
      return {
        ...state,
        fetching: true,
        fetchingError: false
      }
    case GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchingError: false,
        flights: action.payload.flights,
        filteredFlights: null
      }
    case GET_FLIGHTS_ERROR:
      return {
        ...state,
        fetching: false,
        fetchingError: true
      }
    case FILTER_FLIGHTS_BY_CARRIER:
      if (action.payload) {
        return {
          ...state,
          filteredFlights: state.flights.filter(f => f.carrier === action.payload)
        }
      } else {
        return {
          ...state,
          filteredFlights: null
        }
      }
      break
    default:
      return state
  }
}
