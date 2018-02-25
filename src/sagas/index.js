import {all} from 'redux-saga/effects';
import * as fuelSavingsSaga from './fuelSavingsSaga';

export default function* root() {
  yield all([
    fuelSavingsSaga.watchSaveFuelSavings()
  ])
}
