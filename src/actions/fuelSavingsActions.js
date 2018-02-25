import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function saveFuelSavingsThunk(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}

export function calculateFuelSavings(settings, fieldName, value) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}

export function saveFuelSavings(settings) {
  return {
    type: types.SAVE_FUEL_SAVINGS_STARTED,
    payload: {
      settings
    }
  }
}

export function saveFuelSavingsCompleted(dateModified) {
  return {
    type: types.SAVE_FUEL_SAVINGS_COMPLETED,
    payload: {
      dateModified
    }
  }
}

export function saveFuelSavingsError(error) {
  return {
    type: types.SAVE_FUEL_SAVINGS_ERROR,
    payload: {
      error
    }
  }
}
