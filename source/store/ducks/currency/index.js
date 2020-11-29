import CURRENCY_TYPES from './types';

const INITIAL_STATE = {
    loadingConvert: false,
    valueConverted: 0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENCY_TYPES.CURRENCY_CONVERT_REQUEST:
            return {
                ...state,
                loadingConvert: true
            }

        case CURRENCY_TYPES.CURRENCY_CONVERT_SUCCESS:
            return {
                ...state,
                loadingConvert: false,
                valueConverted: action.payload.valueConverted
            }

        case CURRENCY_TYPES.CURRENCY_CONVERT_FAILURE:
            return {
                ...state,
                loadingConvert: true,
            }

        default:
            return state;
    }
}

export default reducer;
