import CURRENCY_TYPES from './types';

export function currencyConvertRequest(
    baseConvert,
    baseToConverted,
    valueToConvert
) {
    return {
        type: CURRENCY_TYPES.CURRENCY_CONVERT_REQUEST,
        payload: { baseConvert, baseToConverted, valueToConvert }
    }
}

export function currencyConvertSuccess(valueConverted) {
    return {
        type: CURRENCY_TYPES.CURRENCY_CONVERT_SUCCESS,
        payload: { valueConverted }
    }
}

export function currencyConvertFailure() {
    return {
        type: CURRENCY_TYPES.CURRENCY_CONVERT_FAILURE,
    }
}
