import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  FILTER_FLIGHTS_BY_CARRIER
} from '../constants'

export function getFlights() {
  return (dispatch) => {
    dispatch({
      type: GET_FLIGHTS_REQUEST
    })

    let request = new XMLHttpRequest()
    request.open('GET', '/data', true)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText)
        dispatch({
          type: GET_FLIGHTS_SUCCESS,
          payload: data
        })
      } else {
        dispatch({
          type: GET_FLIGHTS_ERROR
        })
      }
    }

    request.onerror = function() {
      dispatch({
        type: GET_FLIGHTS_ERROR
      })
    }

    request.send()
  }
}

export function filterFlightsByCarrier(carrier) {
  return {
    type: FILTER_FLIGHTS_BY_CARRIER,
    payload: carrier
  }
}
