import { all, takeLatest } from 'redux-saga/effects';

import CURRENCY_TYPES from './currency/types';
import { currencyConvert } from './currency/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(CURRENCY_TYPES.CURRENCY_CONVERT_REQUEST, currencyConvert)
    ])
}
