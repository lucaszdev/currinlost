import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
    currencyConvertSuccess,
    currencyConvertFailure,
} from './actions';

export function* currencyConvert({ payload }) {
    const {
        baseConvert,
        baseToConverted,
        valueToConvert
    } = payload;

    try {
        const response = yield call(api.get, 'latest', {
            params: {
                base: baseConvert
            }
        });

        const valueConverted = response['data']['rates'][baseToConverted] * valueToConvert;

        yield put(currencyConvertSuccess(valueConverted.toFixed(2)));
    } catch (error) {
        yield put(currencyConvertFailure());
    }
}
