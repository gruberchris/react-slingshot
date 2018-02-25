import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

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
