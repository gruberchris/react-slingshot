import {put, takeEvery} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import * as fuelSavingsActions from '../actions/fuelSavingsActions';
import {getFormattedDateTime} from '../utils/dates';

export function* saveFuelSavings() {
  try {
    // NOTE: This is where a API call to persist the fuel savings settings would happen.
    // Instead, fake the API call result with a modified date
    // The action message parameter, 'action', would be passed into this saga generator function
    const dateModified = getFormattedDateTime();
    yield put(fuelSavingsActions.saveFuelSavingsCompleted(dateModified))
  } catch(e) {
    yield put(fuelSavingsActions.saveFuelSavingsError(e));
  }
}

export function* watchSaveFuelSavings() {
  yield takeEvery(types.SAVE_FUEL_SAVINGS_STARTED, saveFuelSavings);
}
